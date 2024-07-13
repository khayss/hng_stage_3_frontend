import { Search } from "@/svgs/Icons";
import Button from "../Buttons/Button";

export default function ProductNavbar() {
    return (
      <nav className="w-full grid grid-cols-2 grid-rows-2 gap-8 items-center lg:flex lg:items-center lg:justify-between">
        <div className="flex gap-16 justify-start lg:justify-between items-center col-span-1 row-start-1">
          <Button text="Filter" bg="bg-light-gray" textColor="text-gray" />
          <Button text="Sort" bg="bg-light-gray" textColor="text-gray" />
        </div>
        <div className="col-span-2 w-full flex justify-center items-center">
          <ul className="flex text-text-main font-medium text-gray items-center gap-16 whitespace-nowrap lg:whitespace-nowrap lg:overflow-auto overflow-x-scroll h-42">
            <li>All Products</li>
            <li>Iconic Casual Brands</li>
            <li>Athletic/SportWear Brands</li>
            <li>Luxury Fashion Brands</li>
            <li></li>
          </ul>
        </div>
        <div className="col-span-1 col-start-2 row-start-1">
          <form
            action=""
            className="bg-light-gray rounded-lg h-44 px-16 py-12 flex items-center gap-10"
          >
            <button className="bg-transparent h-20">
              <Search />
            </button>
            <input type="text" placeholder="search" className="bg-transparent w-full" />
          </form>
        </div>
      </nav>
    );
  }