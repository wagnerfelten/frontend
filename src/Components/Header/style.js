import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: #001119;
  padding: 8px;
  height: 75px;
`;

export const Hamburg = styled.div`
  > img {
    width: 24px;
    
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-size: 10px;

  > img {
    width: 24px;
    margin-right: 10px;
  }
`;
