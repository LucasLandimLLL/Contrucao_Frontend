import { Container } from "react-bootstrap"
import BarraNavegacao from "./BarraNavegacao"

export default function Pagina({titulo, children}) {
  return (
    <>
        <BarraNavegacao/>

        <div>
            <h1>{titulo}</h1>
        </div>

        <div>
            {children}
        </div>
    </>
  )
}
