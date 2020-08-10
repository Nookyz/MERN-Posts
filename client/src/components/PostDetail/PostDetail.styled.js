import styled from 'styled-components'

export const Detail = styled.div`
  display: grid;
`
export const Container = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  @media only screen and (max-width: 375px){
    margin: 5px auto;
  }
`
export const MyComments = styled.div`
  
`
export const Box = styled.div`
  flex-direction: row;
  margin: 10px 0 10px 0;
  @media only screen and (max-width: 1220px){
    margin: 5px 15px;
  }
  @media only screen and (max-width: 600px){
    margin: 5px;
  }
`
export const Button = styled.button`
  text-align: center;
  padding: 10px 15px;
  background: ${({disabled}) => disabled ? '#ccc' : '#f28482'};
  cursor: pointer;
`