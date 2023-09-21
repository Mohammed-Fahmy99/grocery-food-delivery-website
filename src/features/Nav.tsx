import Container from "@src/components/Layout/Container";
import Logo from "@src/assets/logo.svg";
import { BsFillBasketFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export function Nav() {
  return (
    <Container className="bg-red-900">
      <nav className="bg-white flex justify-between">
        <img src={Logo} alt="logo" />
        <ul className="list-none flex gap-6 items-center">
          <li className="text-[#F55253] font-semibold text-base">Home</li>
          <li className="text-[#4D4D4D] text-base font-medium">Menu</li>
          <li className="text-[#4D4D4D] text-base font-medium">Service</li>
          <li className="text-[#4D4D4D] text-base font-medium">Shop</li>
        </ul>
        <form action="#" className="flex items-center gap-4 drop-shadow-input relative p-4">
          <CiSearch />
          <input
            type="search"
            placeholder="Search"
            className={` search-cancel:appearance-none search-cancel:bg-[url(src/assets/x3.jpg)] search-cancel:w-3 search-cancel:h-3 search-cancel:bg-no-repeat search-cancel:cursor-pointer search-cancel:bg-cover
             outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#232323] `}
          />
          <div className="w-[1.5px] h-2/4 bg-[#F2F2F2] "></div>
          <BsFillBasketFill />
          <div className="text-xs font-medium text-[#FFFDFD] text-center rounded-full bg-[#F54B4B] w-5 h-5 absolute top-0 -right-[10px] leading-0 drop-shadow-circle">
            2
          </div>
        </form>
      </nav>
    </Container>
  );
}
export default Nav;
