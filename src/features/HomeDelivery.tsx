import Container from "@src/components/Layout/Container";
import Man6 from "@src/assets/6.png";
import Card6 from "@src/assets/6_1.svg";

export function HomeDelivery() {
  return (
    <div className="bg-white pb-24">
      <Container>
        <div className="grid grid-cols-2">
          {/* start content  */}
          <div className="flex flex-col gap-4 place-content-end">
            <h3 className="text-[#F9BA45] text-lg font-medium">
            HOME DELIVERY
            </h3>
            <div className="text=[#2E2E2E] text-4xl font-bold">
              Find Favorites and Discover New Ones
            </div>
            <div className="text-[#676767] text-lg font-normal">
              At vero eos et accusamus et iusto odio dignissimos ducimus
              blanditiis praesen voluptatum deleniti.
            </div>
            <button className="text-[#F86061] text-xl font-medium py-[25px] px-[40px] w-fit border-[1.5px] border-[#F86061] border-solid rounded-xl mt-6">
              Explore Now
            </button>
          </div>
          {/* end content */}
          {/* start image */}
          <div className="relative">
            <img src={Man6} alt="man6" height={490}/>
            {/* start card */}
            <div className="flex flex-col bg-white shadow-card6 w-min p-4 gap-3 z-10 absolute top-[34%] right-[4%]">
              <div className="relative flex justify-center items-center w-[126px] h-[86px]">
                <img
                  src={Card6}
                  alt="card6"
                  width={59}
                  height={59}
                  className=""
                />
                <div className="absolute right-0 top-0 bg-[#F54748] opacity-10 rounded-md w-full h-full"></div>
              </div>
              <h4 className="text-[#2E2E2E] text-base font-bold">Bike Delivery</h4>
              <p className="text-[#676767] text-xs font-normal">Bicycle service ensures that your packages arrive quickly</p>
            </div>
            {/* end card */}
          </div>
          {/* end image */}
        </div>
      </Container>
    </div>
  );
}

export default HomeDelivery;
