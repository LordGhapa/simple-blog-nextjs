import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style-type: none;
  }
 :root {
    font-size: 62.5%;
  }
  html{
    height: 100vh;

    margin: 0;
padding: 0;
height: 99%;
  max-height: 100%;
  color:black;
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${theme.font.sizes.medium};
   // background-color: gray;
height: 100%;
min-height: 100vh;

margin: 0;
padding: 0;
height: 99%;
  max-height: 100%;
  color:black;
  }
body>div{

  min-height: 100%;
position: relative;

}

  a {
    color: ${theme.colors.secondary};
    transition: opacity 300ms ease-out;

  }

`;
