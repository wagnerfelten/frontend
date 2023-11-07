import { Container, Header, Section } from "./style";

import Footer from "../../Components/Footer";
import Input from "../../Components/Input";

export default function Menu() {
  return (
    <Container>
      <Header>
        <a href="#">X</a>
        <p>Menu</p>
      </Header>

      <Section>
        <input type="text" placeholder="Busque por pratos ou ingredientes" />

        <a href="#">Sair</a>
      </Section>

      <Footer />
    </Container>
  );
}
