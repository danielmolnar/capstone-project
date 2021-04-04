import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --fontcolor-primary: hsl(0, 100%, 100%);
  --fontcolor-secondary: hsl(0, 100%, 0%);
  --primary-100: hsl(353, 85%, 53%);
  --primary-200: hsl(6, 66%, 35%);
  --primary-100-opacity: hsla(353, 85%, 53%, 0.8);
  --primary-200-opacity: hsla(6, 66%, 35%, 0.8);
  --secondary-100: hsl(0, 100%, 100%);
  --secondary-00-opacity: hsla(360, 100%, 100%, 0);
  --secondardy-50-opacity: hsla(360, 100%, 100%, 0.5);
  --secondardy-75-opacity: hsla(360, 100%, 100%, 0.75);
  --modal-opacity: rgba(0, 0, 0, 0.7);
  --button-hover: hsla(360, 100%, 100%, 0.3);
  --button-hover-light: hsla(360, 100%, 100%, 0.15);
  --boxshadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  --boxshadow-light: 0px 0px 5px rgba(0, 0, 0, 0.5);
  --primary-background: linear-gradient(to right, hsl(6, 66%, 35%), hsl(353, 85%, 53%));


}

*{
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
margin: 0;
background: var(--primary-background);
overflow-x: hidden;
overflow-y: scroll;
scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
}

h2 {
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
  color: var(--secondary-100);
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: var(--secondary-100);
}

`;
