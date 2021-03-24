import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --primary-background: linear-gradient(to right, hsl(6, 66%, 35%), hsl(353, 85%, 53%));
  --primary-100: hsl(353, 85%, 53%);
  --primary-100-opacity: hsla(353, 85%, 53%, 0.8);
  --primary-200: hsl(6, 66%, 35%);
  --secondary-200-opacity: hsla(6, 66%, 35%, 0.8)

}

*{
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  /* background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight}; */
}

body {
margin: 0;
background: var(--primary-background);
}

h2 {
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
  color: white;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
}

`;
