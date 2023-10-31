import { styled } from "styled-components";

export const Container = styled.section`
  width: 190px;
  height: 320px;

  margin-top: 24px;
  border-radius: 10px;
  background: #00070a;
  margin-left: 10px;
  margin-right: 10px;

  > img{
    margin-left: 80%;
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

 

  > img {
    width: 100px;
    margin-bottom: 14px;
  }

  > h3,
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }

  > h4 {
    margin-bottom: 10px;
    font-weight: 500;
    color: #82f3ff;
  }

  > button {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    background-color: #750310;
    color: white;
    border: none;
  }
`;
