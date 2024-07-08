import { gridImg1, gridImg7 } from "../../../assets";
import { gridImg2 } from "../../../assets";
import { gridImg3 } from "../../../assets";
import { gridImg4 } from "../../../assets";
import { gridImg5 } from "../../../assets";
import { gridImg6 } from "../../../assets";

import { gridImg8 } from "../../../assets";


const Collection = () => {
  return (
    <div>
      <div className="px-2.5">
        <div className="flex flex-col items-center pt-[5rem]">
          <span className="text-gray-500 text-[14px] font-medium">OUR FINISH PROJECTS</span>
          <span className="font-medium text-[40px]">Furniture Collection </span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 justify-center items-center  gap-y-5 p-10 gap-x-5 ">
      <img src={gridImg1} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      <img src={gridImg2} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      <img src={gridImg3} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      <img src={gridImg4} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      <img src={gridImg5} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      <img src={gridImg6} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      <img src={gridImg7} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      <img src={gridImg8} alt="" className=" h-[15rem] w-[20rem] rounded-[10px]"/>
      </div>

    </div>

  )
}

export default Collection