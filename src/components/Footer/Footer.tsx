import { WhiteLogo } from "../../svgs/Logo";

export default function Footer() {
  return (
    <footer className="w-full h-[375.52px] md:h-[267.52px] bg-jet text-white flex flex-col items-center justify-around pt-64 pb-48 px-10 lg:px-32 font-noto text-footer mt-auto">
      <div className="w-full flex items-center justify-center">
        <div className="h-[36.52px]">
          <WhiteLogo />
        </div>
      </div>
      <div className="flex flex-col gap-32 w-full items-center max-w-[1280px]">
        <div className="w-[83.5%] md:w-full h-[1px] bg-gray"></div>
        <div className="w-full flex flex-col items-center justify-between gap-32 md:flex-row md:justify-between">
          <div>
            <p>
              <span className="font-medium">
                &copy;{` ${new Date().getFullYear()} AG-Sufre. `}
              </span>
              <span className="font-normal">All rights reserved</span>
            </p>
          </div>
          <div>
            <ul className="flex flex-row font-medium gap-16">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row font-medium gap-16">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
