import { baseUrl, query } from "@/lib/query";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const url = `${baseUrl}/${params.id}?${query}`;

  const res = await fetch(url, { method: "GET", credentials: "include" });

  const data = await res.json();

  return Response.json(data);
}
