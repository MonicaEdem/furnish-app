import { Heart, Map, MoveRight, Phone, Send } from "lucide-react"
import { Visa } from "../assets"
import { Momo } from "../assets"
import { Logo } from "../assets"

const Footer = () => {
  return (
    <div>
    <div className="grid grid-cols-4 justify-center items-center p-10 bg-teal gap-x-10 gap-y-5">
      <div className="flex flex-col">
        <img src={Logo} alt="" className="w-[10rem] h-[8rem]"/>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <div>

        </div>
      </div>

      <div className="flex flex-col gap-y-10 ">
        <h2 className="text-[20px] font-medium antialiased">Services</h2>
        <div>
        <div className="flex gap-3"><MoveRight />Amazing Deals</div>
        <div className="flex gap-3"><MoveRight />Modern Design</div>
        <div className="flex gap-3"><MoveRight />Great Customer Service</div>
        <div className="flex gap-3"><MoveRight />Best Support</div>
        </div>
        
      </div>

      <div className="flex flex-col gap-y-6">
        <h2 className="text-[20px] font-medium antialiased">Payment Platforms</h2>
        <div className="flex flex-col">
          <img src={Visa} alt=""  className="h-16 w-24"/>
          <img src={Momo} alt=""  className="h-16 w-24"/>
        </div>


      </div>

      <div className="flex flex-col gap-y-5">
        <h2 className="text-[20px] font-medium antialiased">Have a Questions?</h2>
        <div className="flex gap-3"><Map className="size-10"/>
        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
         </div>
         <div className="flex gap-3">
          <Phone/> <span>	+2 392 3929 210</span>
         </div>
         <div className="flex gap-3">
          <Send/> <span>	info@yourdomain.com</span>
         </div>
         

      </div>

     </div>
     <div className="bg-tealBlue w-[100%] flex flex-col justify-center items-center">

          <p className="flex p-4">Copyright ©2024 All rights reserved | This is made with  <Heart className="size-6 top-4 "/>  by Monica</p>

         </div>
    </div>
  )
}

export default Footer