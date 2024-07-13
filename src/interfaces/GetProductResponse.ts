import { Product } from "./Product";


export interface GetProductResponse {
  pages: number;
  size: number;
  total: number;
  debug: unknown | null;
  previous_page: string | null;
  next_page: string | null;
  items: Product[];
}
