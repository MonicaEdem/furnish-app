import { Handshake } from "lucide-react"
import K from "../../../constants"

const Services = () => {
  return (
    <div className="grid grid-cols-4  gap-x-2 mt-2">
      {
        K.SERVICES.map(
          (service, index) => {
            return <div key={index} className={``} style={{backgroundColor: service.bgColor}}>
              <span className=""><Handshake/></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

            </div>
          }
        )

          }
        
      

    </div>
  )
}

export default Services