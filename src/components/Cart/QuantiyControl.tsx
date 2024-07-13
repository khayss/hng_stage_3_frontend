"use client";

import { Product } from "@/interfaces/Product";
import {
  changeQuantity,
  decreaseQuantityByOne,
  increaseQuantityByOne,
} from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/redux/hook";
import { ChangeEvent } from "react";

export default function QuantityControl({
  product,
}: {
  product: Product & { quantity: number };
}) {
  const dispatch = useAppDispatch();
  //   const handleChange = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
  //     const value = e.target.value;
  //     if (value === "") {
  //       return;
  //     }
  //     dispatch(changeQuantity({ id, amount: Math.abs(Number(value)) }));
  //   };
  return (
    <div className="h-full flex items-center justify-between gap-16 text-logo-title px-16 bg-soft-gray">
      <button
        className="w-[16px] text-center"
        onClick={() => dispatch(decreaseQuantityByOne(product.id))}
      >
        -
      </button>
      <input
        type="number"
        value={product.quantity}
        // onChange={handleChange(product.id)}
        className="h-26 w-[26px] text-text-main text-center bg-soft-blue"
      />
      <button
        className="w-[16px] text-center"
        onClick={() => dispatch(increaseQuantityByOne(product.id))}
      >
        +
      </button>
    </div>
  );
}
