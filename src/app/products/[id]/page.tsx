"use client";

import Button from "@/components/Buttons/Button";
import ProductCard from "@/components/Cards/ProductCard";
import { type Product } from "@/interfaces/Product";
import { formatNumberWithCommas } from "@/lib/formatNumberWithCommas";
import { Favorite, HalfStar, Like } from "@/svgs/Icons";
import Image from "next/image";
import { useParams } from "next/navigation";
import extraData from "@/data/extraData.json";
import { useEffect, useState } from "react";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async (id: string) => {
      const res = await fetch("/api/products/" + id);
      const data = await res.json();
      setProduct(data);
    };
    getProduct(Array.isArray(id) ? id[0] : id);
  }, [id]);

  return (
    <div className="w-full px-[7%] flex flex-col items-center gap-50 py-20">
      <div className="w-full flex flex-col items-center md:flex-row md:gap-20 md:items-start">
        <div className="w-full md:w-1/2">
          <div className="w-full whitespace-nowrap overflow-hidden md:overflow-visible md:whitespace-normal md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-16 xl:gap-20 relative rounded-xl bg-soft-gray md:bg-transparent">
            {product?.photos.map((image, index) => (
              <div
                className={`h-[300px] w-full inline-block bg-soft-gray rounded-xl ${
                  index === 0 ? "lg:col-span-3" : ""
                }`}
                key={index}
              >
                <Image
                  width={500}
                  height={500}
                  src={`https://api.timbu.cloud/images/${image.url}`}
                  alt=""
                  className="h-full w-full object-contain object-center"
                />
              </div>
            ))}
            <div className="absolute w-full bottom-5 z-50 flex justify-center items-center gap-8 md:hidden">
              {product?.photos.map((_, index) => (
                <div
                  className={`h-8 w-[8px] ${
                    index === 0 ? "bg-main" : "bg-light-gray"
                  } rounded-full`}
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-16 items-start">
          <div className="text-small">
            <small>Sneakers</small>
          </div>
          <div className="w-full  flex flex-col items-start gap-8">
            <div className="w-full flex justify-between">
              <h3 className="text-2xl font-semibold">{product?.name}</h3>
              <div className="h-30 w-[30px]">
                {Math.random() > 0.5 ? <Favorite /> : <Like />}
              </div>
            </div>
            <div>
              <h5 className="text-text-main">{`₦ ${formatNumberWithCommas(
                Array.isArray(product?.current_price)
                  ? product.current_price[0]?.["NGN"]?.[0]
                  : typeof product?.current_price === "number"
                  ? product.current_price
                  : 0
              )}`}</h5>
            </div>
          </div>
          <div className="w-full">
            <small className="text-small text-gray flex gap-8 items-center">
              <span>{`${extraData.amountSold} sold`}</span>
              <span className="h-16">
                <HalfStar />
              </span>
              <span>{`${extraData.rating}(${extraData.numReviews} reviews)`}</span>
            </small>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Description</h4>
            <p className="text-text-main text-gray">{product?.description}</p>
          </div>
          <div className="w-full">
            <h4 className="text-2xl font-semibold">Size</h4>
            <div className="flex gap-8 w-full items-center justify-start">
              {extraData?.sizes.map((size, index) => (
                <input
                  value={size}
                  key={index}
                  className="h-26 w-[26px] bg-soft-gray rounded text-center"
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-2xl font-semibold">Colors</h4>
            <div className="flex gap-8 w-full items-center justify-start">
              {extraData?.colors.map((color, index) => (
                <input
                  type=""
                  value=""
                  key={index}
                  className="h-26 w-[26px] border-none rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Quantity</h4>
            <div className="h-34">
              <form
                action=""
                className="h-full flex items-center justify-between gap-16 text-logo-title px-16 bg-soft-gray"
              >
                <button className="w-[16px] text-center">-</button>
                <input
                  type="number"
                  value={2}
                  className="h-26 w-[26px] text-text-main text-center bg-soft-blue"
                />
                <button className="w-[16px] text-center">+</button>
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
            <div>
              <small className="text-small text-gray">Total Price</small>
              <h4 className="text-lg font-medium">{`₦ ${formatNumberWithCommas(
                Array.isArray(product?.current_price)
                  ? product.current_price[0]?.["NGN"]?.[0]
                  : typeof product?.current_price === "number"
                  ? product.current_price
                  : 0
              )}`}</h4>
            </div>
            <div className="w-full flex justify-between items-center gap-16 md:justify-end">
              <Button
                text={false ? "Remove from Cart" : "Add to Cart"}
                bg={false ? "bg-soft-red" : "bg-soft-blue"}
                textColor={false ? "text-red" : "text-main"}
                additionalClasses="w-1/2 md:w-auto"
              />
              <Button text="Checkout" additionalClasses="w-1/2 md:w-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className="text-big">{`More from ${""}`}</h1>
        {/* <div className="w-full py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
          {products
            .filter((item) => item.brand === product?.brand)
            .map((eachProduct) => (
              <ProductCard
                id={eachProduct.id}
                key={eachProduct.id}
                imgUrl={eachProduct.photos[0].url}
                price={eachProduct.current_price?.[0]["NGN"][0] || 0}
                productName={eachProduct.name}
              />
            ))}
        </div> */}
      </div>
    </div>
  );
}
