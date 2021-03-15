import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  box-sizing: border-box;
}

body {

margin: 0;
background: #ED213A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #93291E, #ED213A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #93291E, #ED213A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

p, h2 {
  font-family: 'Roboto', sans-serif;
  color: white;
}

`;
