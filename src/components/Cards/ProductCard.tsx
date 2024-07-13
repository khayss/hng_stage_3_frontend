import Link from "next/link";
import { Favorite, HalfStar, Like } from "../../svgs/Icons";
import extraData from "@/data/extraData.json";
import Image from "next/image";
import { formatNumberWithCommas } from "@/lib/formatNumberWithCommas";
import CartButton from "../Buttons/CartButton";
import { Product } from "@/interfaces/Product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = Array.isArray(product?.current_price)
    ? product.current_price[0]?.["NGN"]?.[0]
    : product.current_price
    ? product.current_price
    : 0;
  return (
    <div className="max-w-[400px] font-roboto font-medium w-full rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="w-full h-[300px] bg-soft-gray relative">
          <Image
            width={500}
            height={500}
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
            className="object-contain object-center h-full w-full"
          />
          <div className="absolute h-40 top-5 right-5">
            {Math.random() < 0.5 ? <Favorite /> : <Like />}
          </div>
        </div>
      </Link>
      <div className="text-product-heading py-8 flex flex-col items-start gap-8">
        <div>
          <small className="text-small">{extraData.brand}</small>
          <Link href={`/product/${product.id}`}>
            <h4>{product.name}</h4>
          </Link>
        </div>
        <div className="flex gap-4 text-small">
          <div className="h-16">
            <HalfStar />
          </div>
          <small>{`${extraData.rating} (${extraData.amountSold})`}</small>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between gap-[15px]">
            <h4
              className={`${extraData.discountPercentage > 0 && "text-main"}`}
            >
              ₦{formatNumberWithCommas(formattedPrice)}
            </h4>
            {extraData.discountPercentage > 0 && (
              <h4 className="text-gray line-through">
                ₦
                {formatNumberWithCommas(
                  formattedPrice -
                    (formattedPrice * extraData.discountPercentage) / 100
                )}
              </h4>
            )}
          </div>
          <CartButton product={product} amount={formattedPrice} />
        </div>
      </div>
    </div>
  );
}
