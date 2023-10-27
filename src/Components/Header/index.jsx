import {Container, Logo } from "./style";
import {FaAlignJustify} from "react-icons/fa"

export default function Header(){
    return(
        <Container>
          <img src={FaAlignJustify} alt="hamburgue" /> 
          
          <Logo>
            <img src="../../assets/img/Polygon.png" alt="hexagonal" />
            <h1>food explorer</h1>
          </Logo>

          <img src="../../assets/img/restaurante.png" alt="" />
        
        </Container>
    )
}

