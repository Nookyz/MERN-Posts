import styled from 'styled-components'

export const MyCommentsForm = styled.div`
  padding: 5px 0;
  @media only screen and (max-width: 1220px){
    padding: 5px 15px;
  }
  @media only screen and (max-width: 600px){
    padding: 5px;
  }
`

export const Title = styled.div`

`
export const Input = styled.input`
  margin: 10px 0;
  padding: 5px 0;
  border-bottom: 1px solid #303030;

  :focus{
    border-bottom: 1px solid #4badeb;
  }
`
export const Box = styled.div`
  flex-direction: row;
`

export const Button = styled.button`
  text-align: center;
  padding: 10px 15px;
  background: ${({disabled}) => disabled ? '#ccc' : '#f28482'};
  
  &:last-child {
    margin-left: 10px;
  }
`

export const Comment = styled.div`
  display: grid;
  grid-template-columns: auto 50px;
  grid-template-areas: "header delete"
                       "content delete";
  grid-template-rows: 50px 1fr;
  padding: 5px 0;
  &:last-child{
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 1220px){
    padding: 5px 15px;
  }
  @media only screen and (max-width: 600px){
    padding: 5px;
  }
  
  :hover{
    background: #fff4f2;
  }
`
export const Header = styled.div`
  flex-direction: row;
  align-items: center;
`
export const Name = styled.div`
  margin-right: 10px;
  font-size: 15px;
  color: #303030;
`
export const Date = styled.div`
  color: #ccc;
  font-size: 12px;
`

export const Content = styled.div`
  grid-area: content;
  font-size: 15px; 
  word-break: break-all;
`
export const Delete = styled.div`
  margin-top: 10px;
  margin-left: 25px;
  height: 25px;
  width: 25px;
  color: #303030;
  grid-area: delete;
  span {
    cursor: pointer;
    font-size: 25px;
  }
`