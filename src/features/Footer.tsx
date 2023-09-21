import Container from "@src/components/Layout/Container";
import Logo from "@src/assets/Logo.svg";

export function Footer() {
  return (
    <div className="bg-white pt-24">
      <Container>
        <div className="flex flex-col gap-20">
          {/* up footer */}
          <div className="grid grid-cols-5">
            <div className="col-span-2 flex flex-col gap-8">
              <img src={Logo} alt="logo" width={154} height={41} />
              <p className="text-[#676767] text-base font-normal w-1/2">
                Fast delivery, which is active all over the world, serves with
                many transportation vehicles.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#2E2E2E] text-lg font-semibold ">company</h3>
              <ul className="list-none flex flex-col gap-4">
                <li>About Us</li>
                <li>Blog</li>
                <li>All Products</li>
                <li>Locations Map</li>
              </ul>
            </div>{" "}
            <div className="flex flex-col gap-5">
              <h3 className="text-[#2E2E2E] text-lg font-semibold ">
                Services
              </h3>
              <ul className="list-none flex flex-col gap-4">
                <li>Order tracking</li>
                <li>Wish List</li>
                <li>My account</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>{" "}
            <div className="flex flex-col gap-5">
              <h3 className="text-[#2E2E2E] text-lg font-semibold ">
                Get in Touch
              </h3>
              <p className="text-[#676767] text-base font-normal ">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
          {/* down footer */}
          <div className="flex flex-col gap-8">
            <hr className="bg-[#ECECEC] h-[1px] w-full"/>
            <div className="flex justify-between">
            <span>All Rights Reserved &#169; BESNIK 2021</span>
            <div>
              
              <span>Terms &#38; Conditions</span>
              <span>Privacy &#38; Policy</span>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
