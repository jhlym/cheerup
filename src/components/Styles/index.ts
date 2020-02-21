import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* reset */
  * {
    margin: 0;
    padding: 0;
    font-family: 'Spoqa Han Sans', 'Noto Sans KR', 'Sans-serif';
  }

  html,
  body {
    height: 100%;
  }  

  body {
    background-color: #f5f6fa;
  }
`;

// Layouts
export const Container = styled.div`
  width: 480px;
  margin: 0 auto;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
