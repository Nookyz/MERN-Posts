import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MyPopup = styled.div`
  z-index: 10;
  position: absolute;
  margin-top: 105px;
  margin-left: -180px;
  border-radius: 5px;
  width: 220px;
`

export const MyLink = styled(Link)`
  padding: 10px 20px;
  justify-content: center;
  height: 100%;
  color: #EB5E28;
  font-weight: 400;
  font-size: 16px;
  background: #2c2b2b;
  transition: all .5s ease;
  :hover{
    background: #403D39;
    cursor: pointer;
  }
`
export const UserName = styled.div`
  padding: 10px 20px;
  justify-content: center;
  height: 100%;
  color: #EB5E28;
  font-weight: 400;
  font-size: 16px;
  background: #2c2b2b;
  transition: all .5s ease;
  :hover{
    background: #403D39;
    cursor: pointer;
  }
`
export const Logout = styled.button`
  padding: 10px 20px;
  justify-content: center;
  height: 100%;
  color: #EB5E28;
  font-weight: 400;
  font-size: 16px;
  background: #6b4e4e;
  transition: all .5s ease;
  
  :hover{
    background: #8c4949;
    color: #fff;
    cursor: pointer;
  }
`

