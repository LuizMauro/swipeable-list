import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}

  body {
    background-color: ${colors.bg};
  }

  h1{
    font-size: 18px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  p{
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .divider{
    height: 1px;
    background: ${colors.colorText};
    width: 300px;
    margin-top:5px;
    margin-bottom:5px;
  }

`;
