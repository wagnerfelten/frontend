import styled from "styled-components";

export const Container = styled.main`
    background-color: #000405;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;

    background-color: #192227;

    > a{
        font-size: 32px;
        text-decoration: none;
        color: white;
        font-weight: 700;
    }

    > p{
        font-size: 20px;
        font-weight: 700;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    
   padding: 40px;

    margin-top: 28px;

    background-color: #000405;

    width: 250px;


    > input{
        background-color: #192227;
        border: none;
        color: white;

        width: 280px;
        height: 30px;
        padding: 10px;
        border-radius: 10px;
    }

    > a{
        color: white;
        font-size: 20px;
        margin-top: 24px;
        border-bottom: 1px solid #192227;
        width: 280px;
        margin-bottom: 310px;
        font-weight: 500;
    }

`;