"use client";

import { selectCartTotal } from "@/lib/redux/features/cart/cartSlice";
import { useAppSelector } from "@/lib/redux/hook";

export default function CartNotif() {
  const cartLength = useAppSelector(selectCartTotal);
  return (
    <>
      <p>Cart</p>
      <p className="absolute hidden text-small h-12 w-[12px] bg-red rounded-full text-center text-white md:flex justify-center items-center top-0 -right-[12px]">
        {cartLength}
      </p>
    </>
  );
}
