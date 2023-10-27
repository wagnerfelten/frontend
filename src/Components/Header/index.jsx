import { Container, Hamburg, Logo } from "./style";
import menu from "../../assets/img/Menu.svg";
import logo from "../../assets/img/hexagonal.svg";
import compra from "../../assets/img/Vector-compra.svg"
 
export default function Header() {
  return (
    <Container>
      <Hamburg className="img-hamburg">
        <img src={menu} alt="" />
      </Hamburg>

      <Logo>
        <img src={logo} alt="1" />
        <h1>food explorer</h1>
      </Logo>

      <img src={compra} alt="compra" />
    </Container>
  );
}
