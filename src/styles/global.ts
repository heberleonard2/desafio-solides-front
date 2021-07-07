import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html, body, #__next{
  height:100%;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; //15px
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%; //14px
  }
}

body,
input,
textarea,
select,
button {
  font: 400 1rem 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`
