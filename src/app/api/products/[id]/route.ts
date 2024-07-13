import { baseUrl, query } from "@/lib/query";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${baseUrl}/${params.id}?${query}`, {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();

  return Response.json(data);
}
