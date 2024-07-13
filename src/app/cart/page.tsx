import Button from "@/components/Buttons/Button";
import CartComponent from "@/components/Cart/Cart";

export default function Cart() {
  return (
    <div className="w-full px-[7%] flex flex-col pt-20 pb-40 items-center">
      <div className="w-full max-w-[850px] flex flex-col items-center gap-20">
        <div className="w-full">
          <ul className="flex  justify-between text-text-main overflow-x-scroll text-nowrap">
            <li className="px-16 text-center">My cart</li>
            <li className="px-16 text-center">Personal Information</li>
            <li className="px-16 text-center">Delivery Option</li>
            <li className="px-16 text-center">Confirm Order</li>
            <li className="px-16 text-center">Make Payment</li>
          </ul>
        </div>

        <CartComponent />
      </div>
    </div>
  );
}
