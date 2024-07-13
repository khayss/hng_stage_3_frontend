import BrandLogo from "@/components/BrandLogo/BrandLogo";
import Button from "@/components/Buttons/Button";
import Hero from "@/components/Hero/Hero";
import { GetProductResponse } from "@/interfaces/GetProductResponse";
import Image from "next/image";
import brands from "@/data/brands.json";
import { Product } from "@/interfaces/Product";
import ProductCard from "@/components/Cards/ProductCard";
import getProducts from "@/lib/getProducts";

export default async function Home() {
  const data: GetProductResponse = await getProducts();
  const productToUse = data.items;

  return (
    <div className="w-full flex flex-col items-center font-roboto pb-[160px]">
      <Hero />
      <div className="w-full flex flex-col justify-center items-center py-20">
        <div className="w-full flex items-center justify-around gap-30">
          {brands.map((brand, index) => (
            <BrandLogo key={index} imgUrl={brand.logo} name={brand.name} />
          ))}
        </div>
      </div>
      <div className="w-full  px-[7%] pt-40 md:pt-60">
        <div className="w-full flex flex-col items-center max-w-[1242px] gap-60">
          <div className="w-full flex flex-col gap-26 items-center">
            <h1 className="text-big font-medium text-center">New Arrivals</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-20 place-items-center">
              <div className="col-span-1 lg:col-span-1 xl:col-span-2 rounded-lg overflow-hidden self-stretch">
                <Image
                  height={500}
                  width={500}
                  src="/images/home/new-arrivals-img.jpg"
                  alt="new arrivals"
                  className="w-full h-full object-cover"
                />
              </div>
              {productToUse.slice(0, 2).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="w-full">
              <ThreeCards products={productToUse.slice(2, 5)} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-26">
            <h1 className="text-big font-medium text-center">
              Our Special Offers
            </h1>
            <ThreeCards products={productToUse.slice(5, 8)} />
          </div>
          <div className="flex w-full flex-col items-center gap-26">
            <h1 className="text-big font-medium text-center">
              Featured Sneakers
            </h1>
            <ThreeCards products={productToUse.slice(8, 14)} />
          </div>
          <div>
            <Button text="View All Sneakers" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ThreeCards({ products }: { products: Product[] }) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-20 place-items-center">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
