import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Nav = styled.div`
  height: 50px;
  /* background: #252422; */
  background: #2c2b2b;
`

export const Container = styled.div`
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  @media only screen and (max-width: 375px){
    margin: 5px auto;
  }
  
  /* @media (min-width: 575.98px){
    min-width: 540px;
    margin: auto;
  }

  @media (min-width: 767.98px){
    min-width: 720px;
  }

  @media (min-width: 991.98px) {
    min-width: 960px;
  }

  @media (min-width: 1199.98px){
    min-width: 1140px;
  }
   */
  
`
export const Logo = styled.div`
  justify-content: center;
  padding: 10px 20px;
  color: #EB5E28;
  font-weight: 400;
  font-size: 16px;

  :hover{
    background: #403D39;
    color: #fff;
    cursor: pointer;
  }
`

export const NavLinks = styled.div`
  flex-direction: row;
`

export const Link = styled(NavLink)`
  
  padding: 10px 20px;
  justify-content: center;
  height: 100%;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  
  :hover{
    background: #403D39;
    cursor: pointer;
  }

  &.active{
    color: #EB5E28;
  }
  
  
`
export const Box = styled.div`
  height: 100%;
  justify-content: center;
  padding: 0 10px;
  
`
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`