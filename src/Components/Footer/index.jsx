import {Container, Content} from "./style.js";

import hexaCinza from "../../assets/img/exaCinza.svg";

export default function Footer() {
  return (
    <Container>
      <Content>
        <img src={hexaCinza} alt="hexagonal cinza" />
        <p>food explorer</p>
      </Content>

      <div>
        <p>&copy; 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}
