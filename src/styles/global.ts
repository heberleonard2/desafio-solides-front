import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

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

  body{
    background-color: ${props => props.theme.colors.lightGray};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  label{
    font-weight:500;
    font-size:15px;
  }
  button {
    cursor: pointer;
    font-weight:600;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  //React Modal
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  .react-modal-overlay.ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .react-modal-overlay.ReactModal__Overlay--before-close {
    opacity: 0;
  }
  .react-modal-content{
    width:100%;
    max-width:576px;
    background: ${props => props.theme.colors.white};
    margin: 0 1rem;
    padding:  4rem 3rem;
    position:relative;
    border-radius:0.5rem;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.2s ease-in-out;
  }
  .react-modal-content:focus{
    outline:0;
  }
  .react-modal-content.ReactModal__Content--after-open {
    opacity: 1;
    transform: translateY(0px);
  }
  .react-modal-content.ReactModal__Content--before-close {
    opacity: 0;
    transform: translateY(100px);
  }

  .react-modal-close{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    margin:0;
    border:0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
  }
`
