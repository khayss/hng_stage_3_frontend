import { Product } from "@/interfaces/Product";
import { formatNumberWithCommas } from "@/lib/formatNumberWithCommas";
import { XIcon } from "@/svgs/Icons";
import Image from "next/image";
import Link from "next/link";
import extraData from "@/data/extraData.json";
import QuantityControl from "../Cart/QuantiyControl";

type CartCardProps = {
  product: Product & { quantity: number };
};

export function CartCard({ product }: CartCardProps) {
  const price = Array.isArray(product.current_price)
    ? product.current_price[0]?.["NGN"]?.[0]
    : product.current_price
    ? product.current_price
    : 0;
  return (
    <div className="flex w-full gap-20 items-center justify-between relative py-20 md:p-20">
      <div className="max-h-[120px] min-h-100 w-[100px] bg-light-gray rounded-lg flex items-center justify-center">
        <Image
          width={300}
          height={300}
          src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
          alt=""
          className="h-full max-h-[80px] object-contain w-full object-center"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-20">
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="text-lg font-medium">
            <Link href={`/products/${product.id}`}>
              <h4>{product.name}</h4>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-4 items-center">
              <div
                style={{ backgroundColor: extraData.color.color || "#000000" }}
                className="h-24 w-[24px] rounded-md"
              ></div>
              <div>
                <small className="text-small text-gray capitalize">
                  {extraData.color.text || "Black"}
                </small>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-text-main">Size</p>
              <p className="text-text-main text-gray">{extraData.size || 32}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-16">
          <div className="h-34">
            <QuantityControl product={product} />
          </div>
          <div>
            <p className="text-product-heading">
              {formatNumberWithCommas(price)}
            </p>
          </div>
        </div>
      </div>

      <div className="h-24 md:right-8 md:absolute md:top-2">
        <XIcon />
      </div>
    </div>
  );
}
