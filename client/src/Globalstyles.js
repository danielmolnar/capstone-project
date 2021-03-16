import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --primary-background: linear-gradient(to right, hsl(6, 66%, 35%), hsl(353, 85%, 53%));





  --primary-100: hsl(353, 85%, 53%);
  --primary-100-opacity: hsla(353, 85%, 53%, 0.8);
  --primary-200: hsl(6, 66%, 35%);
  --secondary-200-opacity: hsla(6, 66%, 35%, 0.8)

  




}

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {

margin: 0;
background: var(--primary-background);

}

p, h2 {
  
  color: white;
}

`;
