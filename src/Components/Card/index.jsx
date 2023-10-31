import {Container} from "./style.js";

export default function Card({title}){
    return(
        <Container>
            <img src="" alt="" />

            <h3>{title}</h3>
            <p>R$ 49,97</p>

            <p>- 01 +</p>

            <button>Incluir</button>
        </Container>
    );
}

