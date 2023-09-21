import Container from "@src/components/Layout/Container"
import mobile_mockup from "@src/assets/mobile_mockup.png"
import AppleIcon from "@src/assets/apple.svg"
import GoogleIcon from "@src/assets/google.svg"

export function DownloadOurApp() {
  return (
    <div className="bg-[#FEF5F5] py-24">
      <Container>
        <div className="grid grid-cols-2">
          <div>
            <img src={mobile_mockup} alt="mobile mockup" />
          </div>
          {/* start content  */}
          <div className="flex flex-col gap-4 place-content-center">
            <h3 className="text-[#F54748] text-lg font-medium">
            Download our app
            </h3>
            <div className="text=[#2E2E2E] text-4xl font-bold">
            Get the Groceries app order more easily.
            </div>
            <div className="text-[#676767] text-lg font-normal">
              At vero eos et accusamus et iusto odio dignissimos ducimus
              blanditiis praesen voluptatum deleniti.
            </div>
           <div className="flex gap-8 mt-4">
            <a href="#" className="flex items-center gap-8 px-4 py-4 border-[1.5px] border-[#EEDCDC] border-solid rounded-xl w-fit">
              <img src={AppleIcon} alt="apply" />
              <span className="text-[#2E2E2E] text-xl font-medium">App Store</span>
              </a>
              <a href="#" className="flex items-center gap-8 px-4 py-4 border-[1.5px] border-[#EEDCDC] border-solid rounded-xl w-fit">
              <img src={GoogleIcon} alt="google" />
              <span className="text-[#2E2E2E] text-xl font-medium">Play Store</span>
              </a>
           </div>
          </div>
          {/* end content */}
        </div>
      </Container>
    </div>
  )
}

export default DownloadOurApp
