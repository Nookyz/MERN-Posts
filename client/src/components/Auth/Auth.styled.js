import styled from 'styled-components'

export const Main = styled.div`
  margin: 20vh auto;
  width: 350px;
`

export const Auth = styled.div`
  width: 100%;
  max-height: 500px;
  background: #f3f3f3;
  margin-bottom: 15px;
`
export const Container = styled.div`
  padding: 30px 40px;
`

export const Header = styled.div`
  margin: auto;
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #403D39;
`
export const Form = styled.div`
  justify-content: center;
`

export const FormGroup = styled.div`
  border: 1px solid ${({error}) => error ? 'red' : '#c3c3c3'};
  border-radius: 4px;
  margin-bottom: 5px;
  flex-direction: row;
`

export const Group = styled.div`
  width: ${({width}) => width ? width : '100%'};
`

export const Label = styled.label`
  color: #EB5E28;
  padding: 2px 6px;
  width: 100%;
`

export const Input = styled.input`
  padding: 2px 6px;
  height: 20px;
  width: 100%;
  color: #403D39;
`
export const Button = styled.button`
  justify-content: center;
  background: #403D39;
  padding: 10px;
  color: #EB5E28;
  cursor: pointer;
  align-items: center;
  border-radius: ${({br}) => br ? br : 'none'};
  width: ${({width}) => width ? width : '100%'};
`

export const Footer = styled.div`
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background: #f3f3f3;
  
  a {
    color: #EB5E28;
  }
`
export const Content = styled.div`
  color: #403D39;
`