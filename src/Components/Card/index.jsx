import { Container, Content} from "./style.js";

import Button from "../../Components/Button";
import prato from "../../assets/img/comidaPrato.png";
import coracao from "../../assets/img/coração.svg";


export default function Card({ title, ...rest }) {
  return (
    <Container>
        <img src={coracao} alt="" />
      <Content>
        <img src={prato} alt="" />

        <h3>{title}</h3>

        
        <h4>R$ 49,97</h4>

        <p>- 01 +</p>

        <Button title="Incluir"/>    
      </Content>
    </Container>
  );
}
