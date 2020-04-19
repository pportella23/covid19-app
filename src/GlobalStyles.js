import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, #root {
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  header{
    color: ${({ theme }) => theme.text};
  }

  .update-font .title{
    color: ${({ theme }) => theme.text};
  }
  .blueTable tbody td {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
  }
`;