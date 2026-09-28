const INDEXNOW_KEY = process.env.INDEXNOW_KEY!;
const HOST = "www.londradepo.com";

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
