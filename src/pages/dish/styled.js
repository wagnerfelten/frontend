import styled from "styled-components";

export const Container = styled.main`
    
`;

export const Content = styled.section`
        margin-top: 24px;
        margin-bottom: 65px;

        > h3 {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
`;

export const Card = styled.div`

   
    display: flex;
    flex-direction: column;
    align-items: center;

    > img{
        width: 100px;
    }
    
    > h3 {
        font-size: 18px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    > p{
        width: 250px;
        font-size: 14px;
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const Tags = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    margin-left: 40px;
    margin-top: 10px;

`;

export const Price = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    align-items: center;
    margin-top: 45px;

    >button{
        background-color: red;
        width: 180px;
        height: 40px;

        border-radius: 10px;

        color: white;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        >img{
            width: 20px;
        }

    }
`;