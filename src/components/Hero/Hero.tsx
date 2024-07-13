import { Search } from "@/svgs/Icons";
import Button from "../Buttons/Button";

export default function Hero() {
    return (
      <div className="bg-[--hero-bg] font-roboto flex flex-col items-center w-full gap-30 h-[400px] justify-center px-[7%]">
        <div>
          <h1 className="text-big font-semibold text-center">
            Step up Your Game
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-body-14 max-w-[760px] w-full text-center">
            Shop now for unbeatable comfort, top-notch designs, and top-tier
            performance from your favorite brands. Elevate your sneaker game with
            us!
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <form className="bg-soft-gray h-44 py-12 px-16 rounded-lg flex items-center gap-10 max-w-[386px] w-full">
            <button className="h-20 bg-transparent">
              <Search />
            </button>
            <input
              placeholder="Search brand name, category, male, female etc..."
              className="bg-transparent grow truncate"
            />
          </form>
        </div>
        <div>
          <Button text="Shop Now" />
        </div>
      </div>
    );
  }