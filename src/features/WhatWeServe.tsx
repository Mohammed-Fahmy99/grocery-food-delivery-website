import Container from "@src/components/Layout/Container";
import Card from "@src/components/shared/Card";
import Icon1 from "@src/assets/icon_1.svg";
import Icon2 from "@src/assets/icon_2.svg";
import Icon3 from "@src/assets/icon_3.svg";

export function WhatWeServe() {
  return (
    <div className="bg-[#FEF5F5] py-24">
      <Container>
        {/* start heading */}
        <div className="flex flex-col gap-2 text-center mb-10">
          <h2 className="text-[#F54748] text-base font-medium">
            What we Serve
          </h2>
          <h3 className="text-[#2E2E2E] text-4xl font-bold ">
            fruit and vegetable delivered to your home
          </h3>
        </div>
        {/* end heading */}
        <div className="grid grid-cols-3 gap-8">
          <Card
            heading="Free shipping"
            icon={Icon1}
            content="Enjoy Order in a hand using the fresness of groceries"
          />
          <div className="relative">
            <Card
            className="z-10 relative"
              heading="15 days returns"
              icon={Icon2}
              content="Order in a handy way using the freshness of the groceries."
            />
            <div className="bg-[#FE6A6A] rounded-xl w-[310px] h-[334px] -rotate-3 absolute top-0 right-0 z-0"></div>
          </div>
          <Card
            heading="Secure checkout"
            icon={Icon3}
            content="If you get rotten items - return immediately to us."
          />
        </div>
      </Container>
    </div>
  );
}

export default WhatWeServe;
