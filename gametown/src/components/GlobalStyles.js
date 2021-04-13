import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
}
body {
  font-family: 'Mukta', sans-serif;
  width: 100%;
}
h2{
  font-size: 3rem;
  font-family: 'Abril Fatface', cursive;
  font-weight: lighter;
  color: #333;
}
h3{
  font-size: 1rem;
  color: #333;
  padding: 0.8rem 0;

}
p{
  font-size: 0.9rem;
  line-height: 200%;
  color: #696969;
}
a{
  text-decoration: none;
  color: #333;

}
img {
  display: block;
}
input{
  font-weight: bold;
  font-family: 'Mukta', sans-serif;
}
`;

export default GlobalStyles;
