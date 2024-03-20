import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
html, body {
    height: 100%;
  }
main{
    min-height: 100vh;
    margin-top: 100px;
}
p,label{
  font-size: 1.1em
}
@media screen and (min-width: 600px) {
  main{
    margin-top: 200px;
}
}
`;
export default GlobalStyle;
