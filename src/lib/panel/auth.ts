/**
 * Panel session: an HMAC-signed, time-limited cookie (Web Crypto, so it runs in middleware and route handlers).
 * Cookie value = "<expiresAtMs>.<base64url HMAC-SHA256(expiresAtMs, PANEL_SECRET)>". No user data is stored.
 */
export const PANEL_COOKIE = "ld_panel";
export const SESSION_MS = 7 * 24 * 60 * 60 * 1000;

const enc = new TextEncoder();

function b64url(buf: ArrayBuffer): string {
  let s = "";
  for (const b of new Uint8Array(buf)) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64url(await crypto.subtle.sign("HMAC", key, enc.encode(data)));
}

/** Constant-time string comparison. */
export function safeEqual(a: string, b: string): boolean {
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  let diff = ab.length ^ bb.length;
  for (let i = 0; i < Math.max(ab.length, bb.length); i++) diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  return diff === 0;
}

export function panelConfigured(): boolean {
  return Boolean(process.env.PANEL_PASSWORD && process.env.PANEL_SECRET && process.env.PANEL_SECRET.length >= 16);
}

export async function createSession(): Promise<string> {
  const exp = String(Date.now() + SESSION_MS);
  return `${exp}.${await hmac(process.env.PANEL_SECRET as string, exp)}`;
}

export async function verifySession(value: string | undefined): Promise<boolean> {
  if (!value || !panelConfigured()) return false;
  const [exp, sig] = value.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  return safeEqual(sig, await hmac(process.env.PANEL_SECRET as string, exp));
}
