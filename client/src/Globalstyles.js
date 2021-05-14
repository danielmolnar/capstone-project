import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --primary-100: hsl(353, 85%, 53%);
  --primary-200: hsl(6, 66%, 35%);
  --primary-100-opacity: hsla(353, 85%, 53%, 0.8);
  --primary-200-opacity: hsla(6, 66%, 35%, 0.8);
  --secondary-100: hsl(0, 100%, 100%);
  --secondary-00-opacity: hsla(360, 100%, 100%, 0);
  --secondardy-50-opacity: hsla(360, 100%, 100%, 0.5);
  --secondardy-75-opacity: hsla(360, 100%, 100%, 0.75);
  --secondardy-85-opacity: hsla(360, 100%, 100%, 0.85);
  --tertiary-100: hsl(0, 100%, 0%);
  --fontcolor-primary: hsl(0, 100%, 100%);
  --fontcolor-secondary: hsl(0, 100%, 0%);
  --modal-opacity: rgba(0, 0, 0, 0.7);
  --button-hover: hsla(360, 100%, 100%, 0.3);
  --button-hover-light: hsla(360, 100%, 100%, 0.15);
  --boxshadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  --boxshadow-light: 0px 0px 5px rgba(0, 0, 0, 0.5);
  --primary-background: linear-gradient(to right, hsl(6, 66%, 35%), hsl(353, 85%, 53%));
  --secondary-background: linear-gradient(to left, hsl(6, 66%, 35%), hsl(353, 85%, 53%));

  --base-font-size: 1em;
  --base-line-height: 1.5;
  --bp-medium: 64em;
  --bp-large: 85.375em;
  --bp-xlarge: 120em;
  --bp-xxlarge: 160em;

}


*{
  box-sizing: border-box;
}

body {
margin: 0;
background: var(--primary-background);
font-family: Roboto, sans-serif;
font-size: var(--base-font-size);
line-height: var(--base-line-height);

}

h2 {
  font-family: Bebas Neue, sans-serif;
  color: var(--secondary-100);
  font-size: 1.8em;

  @media(min-width: 800px) {
    font-size: 2.2em;
  }
}

p {
  font-family: 'Roboto', sans-serif;
  color: var(--secondary-100);
  font-size: 1em;
  
  @media(min-width: 800px) {
    font-size: 1.15em;
  }
}

button {
  @media(min-width: 800px) {
    font-size: 1em;
  }
}

`;
