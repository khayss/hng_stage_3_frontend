"use client";

import { Product } from "@/interfaces/Product";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";

type CartButtonProps = {
  product: Product;
  amount: number;
};

export default function CartButton({ product, amount }: CartButtonProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);
  const handleClick = () => {
    dispatch(
      cart[product.id] ? removeFromCart(product.id) : addToCart({...product, amount})
    );
  };
  return (
    <button
      onClick={handleClick}
      className={`h-34 py-8 px-16 rounded-lg font-semibold text-text-main ${
        cart[product.id] ? "bg-soft-red text-red" : "bg-soft-blue text-main"
      }`}
    >
      {cart[product.id] ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}
