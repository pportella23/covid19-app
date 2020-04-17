import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

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
  font-family: Roboto, sans-serif;
  font: 400 14px Roboto, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
`;