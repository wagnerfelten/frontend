import { Container, CardContent, Content, CardsFood } from "./style";

import comidas from "../../assets/img/comidas.svg";
import Header from "../../Components/Header";
import Card from "../../Components/Card";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <CardContent>
          <img src={comidas} alt="imagens de comidas" />
          <Content>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </Content>
        </CardContent>

        <CardsFood>
          <h2>Refeições</h2>
          <Card title="Salada Ravanello" />
        </CardsFood>
      </Container>
    </>
  );
}

export default Home;
