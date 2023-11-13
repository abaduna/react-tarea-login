
import { useContext } from "react"
import { AuthContex } from "../../contexts/Auth";


function Dasboard() {
  const {getUserInformarion} = useContext(AuthContex)
  const {name}=getUserInformarion()
  return (
    <div>Bienvenido {name}</div>
  )
}

export default Dasboard

