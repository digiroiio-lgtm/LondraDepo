import "server-only";
import { JWT } from "google-auth-library";

/** Access token for a Google service account (GOOGLE_SERVICE_ACCOUNT_JSON = the downloaded JSON key). */
const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly", "https://www.googleapis.com/auth/webmasters.readonly"];
let client: JWT | null = null;

export function googleConfigured(): boolean {
  return Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
}

export async function googleToken(): Promise<string> {
  if (!client) {
    const key = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON as string) as { client_email: string; private_key: string };
    client = new JWT({ email: key.client_email, key: key.private_key, scopes: SCOPES });
  }
  const { token } = await client.getAccessToken();
  if (!token) throw new Error("Google token alınamadı");
  return token;
}
