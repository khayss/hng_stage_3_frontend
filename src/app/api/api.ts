import { baseUrl, query } from "@/lib/query";

export async function getProducts() {
  const res = await fetch(`${baseUrl}?${query}`, {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data;
}

export async function getProductById(id: string) {
  const res = await fetch(`${baseUrl}/${id}/?${query}`, {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();

  return data;
}
