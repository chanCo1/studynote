/**
 * @filename : GlobalStyle.js
 * @author : 박찬우
 * @description : 전역으로 적용할 스타일 지정
 */

// 패키지 참조
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gideon Roman', cursive;
  }

  .contentWrap {
    padding: 12px 24px;
  }

  hr {
    width: 1100px;
    margin: auto;
    opacity: .3;
  }
`;

export default GlobalStyle;
