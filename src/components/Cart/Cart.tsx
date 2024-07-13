"use client";

import { useAppSelector } from "@/lib/redux/hook";
import Button from "../Buttons/Button";
import { CartCard } from "../Cards/CartCard";
import {
  selectCart,
  selectCartTotalPrice,
} from "@/lib/redux/features/cart/cartSlice";
import { formatNumberWithCommas } from "@/lib/formatNumberWithCommas";

export default function CartComponent() {
  const cart = useAppSelector(selectCart);
  const totalAmount = useAppSelector(selectCartTotalPrice);

  return (
    <div className="w-full">
      <div className="w-full">
        {cart.id.map((id) => (
          <CartCard product={cart.cart[id]} key={id} />
        ))}
      </div>
      <div className="mt-auto flex justify-between w-full">
        <div className="flex flex-col items-start gap-8">
          <p className="text-body-14 text-gray">Total Price</p>
          <h4 className="text-product-heading">{`₦ ${formatNumberWithCommas(
            totalAmount
          )}`}</h4>
        </div>
        <div className="flex items-center gap-8">
          <Button text="Cancel" bg="bg-white" textColor="text-black" />
          <Button text=" Proceed" />
        </div>
      </div>
    </div>
  );
}
