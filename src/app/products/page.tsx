import Button from "@/components/Buttons/Button";
import ProductCard from "@/components/Cards/ProductCard";
import ProductNavbar from "@/components/ProductNavBar/ProductNavBar";
import { GetProductResponse } from "@/interfaces/GetProductResponse";
import { getProducts } from "../api/api";


export default async function Products() {
  const data: GetProductResponse = await getProducts();
  const products = data.items;

  return (
    <div className="w-ful flex justify-center pb-96 px-16 md:px-32 lg:px-48 xl:px-0">
      <div className="max-w-[1241px] w-full">
        <div className="w-full flex flex-col items-center gap-26 pt-36">
          <ProductNavbar />
          <div className="flex flex-col items-center gap-26">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[21px] gap-y-20 place-items-center">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <Button text="View More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
