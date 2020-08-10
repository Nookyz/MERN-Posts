import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
  @media only screen and (max-width: 375px){
    margin: 5px auto;
    padding: 0 10px;
  }
`
export const Box = styled.div`
  margin: 10px 0;
`

export const Title = styled.div`
  font-size: 16px;
`
export const Select = styled.select`
  border: 1px solid #ccc;
  padding: 6px 10px;
  background: #fff;
  cursor: pointer;
  appearance: none;

  :focus{
    outline: 2px solid #4badeb;
  }
`
export const Option = styled.option`
  
`

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  
`
export const Textarea = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #ccc;
  background: #fff;
  color: #303030;
  vertical-align: top;
  font: 14px/1.6 Verdana,Geneva,sans-serif;
  resize: vertical;
  min-height: 400px;
`

export const Button = styled.button`
  text-align: center;
  padding: 10px 15px;
  background: ${({disabled}) => disabled ? '#ccc' : '#f28482'};
  cursor: pointer;
`