import {Play } from "lucide-react"
import {aboutImg} from "../../../assets"
const About = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2">
      <img src={aboutImg} alt="About Background" className="object-cover w-full h-full" />

      </div>
      <div className="w-1/2">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4 ">
          <div className="flex flex-col text-[40px]">
            <span className="text-gray-500 text-[14px] pt-[8rem] font-medium">ABOUT FURNISH</span>
            <span className="font-medium">Quality Makes the Belief for </span>
            <span className="font-medium">Customers</span>
          </div>
          <p className="text-gray-500 w-[25rem]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
         <div className="flex flex-row gap-x-10 w-auto "><div className="bg-red-400 rounded-[4rem] p-6  animate-bounce "><Play className="fill-white size-8 place-content-center  text-red-400 "/> </div><span className="text-red-400 text-[20px] pt-6">watch video</span></div>
        </div>

      </div>
    </div>
  )
}

export default About