import { gridImg1 } from "../../../assets";
import { gridImg2 } from "../../../assets";
import { gridImg3 } from "../../../assets";
import { gridImg4 } from "../../../assets";
import { gridImg5 } from "../../../assets";
import { gridImg6 } from "../../../assets";


const Collection = () => {
  return (
    <div>
      <div className="px-2.5">
        <div className="flex flex-col items-center pt-[5rem]">
          <span className="text-gray-500 text-[14px] font-medium">OUR FINISH PROJECTS</span>
          <span className="font-medium text-[40px]">Furniture Collection </span>
        </div>
      </div>
      
      <div className="">
          
          <gridImg1/>
          <gridImg2/>
          <gridImg3/>
          <gridImg4/>
          <gridImg5/>
          <gridImg6/>
          
        </div>

    </div>

  )
}

export default Collection