
function Card({icon, heading, content,className}:{icon:string,heading:string,content:string,className?:string}) {
  return (
    <div className={`bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center w-[300px] h-[310px] ${className}`}>
      <img src={icon} alt="Icon1" className="mb-14 w-fit"/>
      <div className="text-[#2E2E2E] text-xl font-semibold">{heading}</div>
      <div className="text-[#676767] text-sm font-normal">{content}</div>
    </div>
  )
}

export default Card
