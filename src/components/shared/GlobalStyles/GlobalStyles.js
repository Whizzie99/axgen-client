import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --font-stack: 'Exo 2', sans-serif;
    --blue: #0282EA;
    --purple: #2F1967;
    --white: #fff;
    --black: #000;
    --blue-gradient: linear-gradient(180deg, #1945B3 0%, #00A7FF 100%);
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
