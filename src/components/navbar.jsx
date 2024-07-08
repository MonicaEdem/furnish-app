import { Link } from "react-router-dom"
import K from "../constants"
import { Logo } from "../assets"

const Navbar = () => {
  return (
    <div className="flex justify-between px-56 py-10 fixed w-full left-0 top-0">
      <img src={Logo} alt="" className="w-[10rem] h-[4rem] pt-[-rem]"/>
      <div className="flex gap-x-16">
        {
          K.NAVLINKS.map(
            (item,index) => {
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }
      </div>
    </div>
  )
}

export default Navbar