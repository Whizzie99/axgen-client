import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --font-stack: 'Exo 2', sans-serif;
    --blue: #0282EA;
    --blue-2: #1b0d4d;
    --blue-3: #301a68;
    --purple: #2F1967;
    --white: #fff;
    --black: #000;
    --blue-gradient: linear-gradient(180deg, #1945B3 0%, #00A7FF 100%);
    --blue-gradient-2: linear-gradient(180deg, rgba(92, 45, 144, 0.8) 0%, rgba(23, 14, 91, 0.8) 100%);
    --purple-gradient-1: linear-gradient(180deg, #3F1461 0%, #341958 53.12%, #231660 100%);
    --text-shadow: 4px 3px 0px #2F1967;
  }

  /* RESET */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-stack);
  }

  body{
    /* position: relative; */
  }

  /* ANIMATIONS */
  @keyframes characterBounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-10px);
  }
}
`;
