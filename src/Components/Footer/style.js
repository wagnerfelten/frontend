import {styled} from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #00111A;

    padding: 24px;
  
    font-size: 10px;

    > div{
        display: flex;

        > img{
        width: 16px;
        margin-right: 5px;
    }
    }

`;

export const Content = styled.div`
    >p {
        color: #4D585E;
        font-weight: 700;
    }
`;