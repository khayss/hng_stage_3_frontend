const queryParams = {
  organization_id: process.env.TIMBU_API_ORG_ID || "",
  Appid: process.env.TIMBU_APP_ID || "",
  Apikey: process.env.TIMBU_API_KEY || "",
};
export const baseUrl = "https://api.timbu.cloud/products";
export const query = new URLSearchParams(queryParams).toString();
