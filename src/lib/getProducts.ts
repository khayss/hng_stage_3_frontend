const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  } else {
    return process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
  }
};

const baseUrl = `${getBaseUrl()}/api/products`;

export default async function getProducts() {
  const res = await fetch(baseUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`${baseUrl}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
