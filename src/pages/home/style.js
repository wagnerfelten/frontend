import styled from "styled-components";

export const Container = styled.main`
  margin-top: 54px;
`;

export const CardContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #192227;
  height: 120px;

  margin: 10px;
  border-radius: 10px;

  > img{
    width: 400px;
  }
`;

export const Content = styled.div`
  > h2 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  > p {
    font-size: 12px;
  }
`;

export const CardsFood = styled.section`
    margin-top: 80px;
    
    > h2{
      font-size: 18px;
      font-weight: 500;
      margin-left: 20px;
    }

`;
