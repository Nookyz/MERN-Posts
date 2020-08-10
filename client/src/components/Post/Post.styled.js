import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MyPost = styled.div`
  display: grid;
  grid-template-columns: auto 100px 100px;
  grid-template-areas: "title title delete"
                       "footer type date";                 
  gap: 10px;
  padding: 20px;
  border-bottom: 1px dashed #303030;
  transition: all .3s ease;
  :hover{
    background: #fff4f2;
  }

  @media only screen and (max-width: 600px){
    grid-template-columns: auto 80px 100px;
    grid-template-areas: "title title delete"
                       "footer type date";
    gap: 5px;
  }
  @media only screen and (max-width: 375px){
    padding: 10px;
  }
`
export const Title = styled(Link)`
  grid-area: title;
  font-size: 26px;
  font-weight: 500;
  color: #303030;
  padding: 5px 0;
`

export const Date = styled.div`
  grid-area: date;
  font-size: 14px;
  color: #303030;
  text-align: center;
  padding: 10px 0;
  @media only screen and (max-width: 600px){
    justify-content: center;
  }
`

export const Type = styled.div`
  grid-area: type;
  justify-content: center;
  text-align: center;
`

export const Footer = styled.div`
  grid-area: footer;
  flex-direction: row;
  height: 50px;
`
export const PostFooter = styled.div`
  border: 1px solid #F9DCC4;
  border-radius: 5px;
  flex-direction: row;
  padding: 5px 10px;
  
  justify-content: space-around;
  @media only screen and (max-width: 450px){
    width: 100%;
    padding: 0;
  }
  @media only screen and (min-width: 450px){
    min-width: 200px;
  }
`

export const Box = styled.div`
  flex-direction: row;
  align-items: center;
`

export const Like = styled.span`
  color: ${({like}) => like ? '#fc8a74' : '#8c8c8c'};
  cursor: pointer;
`

export const Comments = styled.span`
  color: #8c8c8c;
  cursor: pointer;
`

export const Watched = styled.span`
  color: #8c8c8c;
  cursor: pointer;
`

export const Count = styled.div`
  color: #303030;
  font-size: 16px; 
  margin-left: 5px;
`

export const Delete = styled.div`
  margin-left: 70px;
  height: 30px;
  width: 30px;
  color: #fc8a74;
  grid-area: delete;
  span {
    font-size: 30px;
    cursor: pointer;
  }
`