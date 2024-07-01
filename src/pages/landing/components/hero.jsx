import { heroBg } from "../../../assets";
const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-teal place-content-center">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-4 ">
          <div className="flex flex-col text-[40px]">
            <span className="font-thin">Best Design of</span>
            <span className="font-bold">Furniture Collections</span>
          </div>
          <p className="text-gray-500 w-[25rem]">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-tealBlue font-semibold">DISCOVER</button>
        </div>




      </div>
      <div className="w-1/2">
        <img src={heroBg} alt="Hero Background" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default Hero