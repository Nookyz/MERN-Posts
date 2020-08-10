import styled, {keyframes, createGlobalStyle } from 'styled-components'

export const GlobalStyle  = createGlobalStyle`

  html, body, div, #root {
    margin: 0;
    padding: 0;
  }

  body {
    overflow: hidden;
    background: #fcfcfc;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  div {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
  a {
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    text-decoration: none;
  }
  button {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    overflow: hidden;
    font-size: 14px;
    line-height: 18px;
    border: transparent;
    outline: none;
  }
  img, span{
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  ::-webkit-scrollbar-thumb {
    background: #474545; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  @media only screen and (max-width: 375px){
    
    ::-webkit-scrollbar {
      width: 4px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent; 
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`

const rotate = keyframes`
  25% {
    
    color: #2ecc71; 
  }
  50% {
    color: #f1c40f;
  }
  75% {
    color: #e74c3c;
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid;
  color: #3498db;
  
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${rotate} 1.2s linear infinite;
`

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 8px 12px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  align-items: center;
  cursor: pointer;
`

export const ReactButton = styled(Button)`
  align-items: center;
  color: #5cc6ca;
  border-color: #5cc6ca;
  background: #282c34;
  margin: 8px 4px;
`
export const JavaScriptButton = styled(Button)`
  color: #000;
  border-color: #000;
  background: #ecdb54;
  margin: 8px 4px;
`

export const NodeButton = styled(Button)`
  color: #fff;
  border-color: #03a100;
  background: #026e00;
  margin: 8px 4px;
`

export const VueButton = styled(Button)`
  color: #fff;
  border-color: #00a591;
  background: #00a591;
  margin: 8px 4px;
`

export const AngularButton = styled(Button)`
  color: #fff;
  border-color: #c3002f;
  background: #dd0031;
  margin: 8px 4px;
`

export const HTMLButton = styled(Button)`
  color: #fff;
  border-color: #f2552c;
  background: #f2552c;
  margin: 8px 4px;
`
export const CSSButton = styled(Button)`
  color: #fff;
  border-color: #282c34;
  background: #bc70a4;
  margin: 8px 4px;

`
export const JavaButton = styled(Button)`
  color: #e87000;
  border-color: #5283a2;
  background: #fff;
  margin: 8px 4px;
`
export const ExpressButton = styled(Button)`
  color: #fff;
  border-color: #b565a7;
  background: #b565a7;
  margin: 8px 4px;
`

export const NextButton = styled(Button)`
  color: #fff;
  border-color: #000;
  background: #000;
  margin: 8px 4px;
`