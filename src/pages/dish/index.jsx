import { Container, Content, Card, Tags, Price } from "./styled";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import Tag from "../../Components/Tags";

import arrow from "../../assets/img/arrow.svg";
import prato from "../../assets/img/comidaPrato.png";
import compra from "../../assets/img/Vector-compra.svg"

export default function Dish() {
  return (
    <Container>
      <Header />

      <Content>
        <h3>
          {" "}
          <img src={arrow} alt="" /> Voltar{" "}
        </h3>

        <Card>
          <img src={prato} alt="prato de comida" />

          <h3>Nome do prato</h3>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <Tags>
            <Tag title="arroz" />
            <Tag title="arroz" />
            <Tag title="arroz" />
            <Tag title="arroz" />
            <Tag title="arroz" />
            <Tag title="arroz" />
          </Tags>

          <Price>
            <button>
                <img src={compra} alt="icon de compra" />
                pedir ∙ R$ 25,00
            </button>
            <p>- 01 +</p>
          </Price>
        </Card>
      </Content>

      <Footer />
    </Container>
  );
}
