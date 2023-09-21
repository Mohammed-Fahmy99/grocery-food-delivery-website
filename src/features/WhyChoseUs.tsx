import Container from "@src/components/Layout/Container";
import Woman from "@src/assets/woman.png";
import F2 from "@src/assets/f2.png";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";


export function WhyChoseUs() {
  return (
    <div className=" bg-white">
      <Container>
        <div className="grid grid-cols-2 justify-between gap-10">
          <div className="relative drop-shadow-card2 mb-8">
            <img src={Woman} width={408} height={612} alt="f2" />
            {/* start card */}
            <div className="absolute top-1/4 -right-0  flex flex-col justify-between items-center w-fit h-[277px] bg-white drop-shadow-card p-8 rounded-lg">
              {/* heading */}
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-lg font-bold text-[#2E2E2E]">Melting Cheese</h3>
                <h5 className="text-[#A5A4A4] text-xs font-medium">Red Stover</h5>
              </div>
              {/* image */}
              <img src={F2} alt="f2" width={126} height={73} />
              {/* rating */}
              <div className="flex gap-1 items-center self-start">
                <AiFillStar className="text-[#FDC55E]" />
                <span className="text-[#2E2E2E] text-base font-medium">3.8</span>
              </div>
              {/* price */}
              <div className="flex justify-between w-full">
                <span className="text-[#2E2E2E] text-xl font-bold">&#36;49.66</span>
                  <div className="bg-[#F54748] flex justify-center items-center p-2 rounded-lg">
                    <AiOutlinePlus/>
                  </div>
              </div>
            </div>
            {/* end card */}
          </div>
          <div className="flex flex-col gap-4 place-content-center">
            <h3 className="text-[#03A66B] text-lg font-medium">WHY CHOOSE US</h3>
            <div className="text=[#2E2E2E] text-4xl font-bold">Find Favorites and Discover New Ones</div>
            <div className="text-[#676767] text-lg font-normal">At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.</div>
            <button className="text-[#FFFAFA] text-xl font-medium py-[25px] px-[40px] w-fit bg-[#F86061] rounded-xl mt-6" >Explore Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyChoseUs;
