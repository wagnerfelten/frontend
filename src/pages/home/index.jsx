import { Container, CardContent, Content, CardsFood, CardDisplayFlex } from "./style";

import comidas from "../../assets/img/comidas.svg";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";

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
          <CardDisplayFlex>
            <Card title="Salada Ravanello" />
            <Card title="Spaguetti Gambe >" />
          </CardDisplayFlex>
        </CardsFood>

        <CardsFood>
          <h2>Pratos principais</h2>
          <CardDisplayFlex>
            <Card title="Salada Ravanello" />
            <Card title="Spaguetti Gambe >" />
          </CardDisplayFlex>
        </CardsFood>

        <CardsFood>
          <h2>Bebidas</h2>
          <CardDisplayFlex>
            <Card title="Salada Ravanello" />
            <Card title="Spaguetti Gambe >" />
          </CardDisplayFlex>
        </CardsFood>

        <Footer />
      </Container>
    </>
  );
}

export default Home;
