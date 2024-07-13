import { baseUrl, query } from "@/lib/query"

export async function GET(request: Request) {
  
  const url = `${baseUrl}?${query}`;
  const res = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return Response.json(data);
}
