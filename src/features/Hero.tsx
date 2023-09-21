import Container from "@src/components/Layout/Container";
import Fresh from "@src/assets/2.png";
import Man from "@src/assets/image.png";
import Abstract from "@src/assets/abstract.png";
import F from "@src/assets/f.png";
import Alarm from "@src/assets/alarm-clock-icon.svg";
import {BsFillPlayFill} from "react-icons/bs"

import { BsFillCartPlusFill } from "react-icons/bs";

export function Hero() {
  return (
    <Container>
      <div className="grid grid-cols-3 ">
        {/* header content */}
        <div className="flex flex-col gap-4 mt-[60px]">
          <div className="flex gap-3 text-base font-medium text-[#F55556] bg-[#FDECEC] w-fit px-[15px] py-[10px] rounded-full">
            <span>More than Faster</span>
            <img src={F} alt="f" />
          </div>
            <h1 className="text-7xl font-bold">Groceries delivered in as little as <span className="text-[#F54748]">2 hours</span> </h1>
          <div className="text-[#676767]">
          Grocen atssures fresh grocery every morning to your family without getting out in this pandemic.
          </div>
          <div className="flex items-center gap-8 ">
            <button className=" text-[#FFFAFA] py-[20px] px-[40px] bg-[#F86061] rounded-lg">Order Now</button>
            <BsFillPlayFill className="text-[#FDC55E]"/>
            <span className="text-[#363636] font-medium text-lg">Order Process</span>
          </div>
        </div>
        {/* start header image */}
        <div className="col-span-2 relative w-full flex">
          {/* forty card */}
          <div className="relative self-center left-[41px] bottom-[89px] flex flex-col items-center min-w-[182px] h-[235px] bg-white shadow-md rounded-md  z-10">
            <img
              src={Fresh}
              alt="fresh mango"
              className="drop-shadow-orange mb-7"
            />
            <span className="text-xs font-semibold text-[#2E2E2E] w-fit mb-1">
              Fresh Orange
            </span>
            <span className="w-5 h-[2px] bg-[#FFA610] rounded-[1px] mb-4"></span>
            <span className="text-[#2E2E2E] text-2xl font-bold mb-1">
              &#36;44.60
            </span>
            <span className="text-[#A5A5A5] text-[10px] font-medium">
              Free Shipping
            </span>
            <div className="absolute -bottom-[10%] bg-[#FF7071] p-3  rounded-md ">
              <BsFillCartPlusFill className="text-white w-5 h-5" />
            </div>
          </div>
          <img src={Man} alt="man" width={417} height={605} className="" />
          <img
            src={Abstract}
            alt="Abstract"
            className="w-[97px] h-[156px] relative bottom-[20px] right-[45px] self-center"
          />
          <div className="flex gap-4 w-full p-2 h-fit relative top-[20%] right-1/4 bg-white shadow-md rounded-md min-w-fit">
            <img src={Alarm} alt="alarm"/>
            <div className="flex flex-col">
            <span className="text-base font-semibold text-[#404040]">Delivery</span> <span className="text-xs font-medium text-[#A5A4A4]">30 Min</span>
            </div>
          </div>
        </div>
        {/* end header image */}
      </div>
    </Container>
  );
}

export default Hero;
