const INDEXNOW_KEY = process.env.INDEXNOW_KEY!;
import { SITE_URL } from "./site";
const HOST = new URL(SITE_URL).hostname;

export async function submitIndexNow(urls: string[]) {
  const response = await fetch("https://www.bing.com/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, urlList: urls }),
  });

  if (!response.ok) {
    throw new Error(`IndexNow failed: ${response.status} ${response.statusText}`);
  }

  return response.status;
}
