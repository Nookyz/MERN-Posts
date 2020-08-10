import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  @media only screen and (max-width: 375px){
    margin: 5px auto;
  }
`

export const Grid = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 220px auto;
  /* grid-template-rows: 1fr; */
  grid-column-gap: 40px;
  grid-template-areas: "sidebar main";
  
  @media only screen and (max-width: 950px){
    grid-column-gap: 25px;
  }
  @media only screen and (max-width: 900px){
    grid-template-columns: auto;
    grid-template-areas: "sidebar" "main";
    gap: 20px;
  }
  @media only screen and (max-width: 375px){
    padding: 0;
    gap: 10px;
  }
`

export const Sidebar = styled.div`
  grid-area: sidebar;
`

export const SidebarContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  position: sticky;
  margin-top: 20px;
  top: 20px;
  @media only screen and (max-width: 375px){
    margin-top: 0px;
    
  }
`

export const PostContainer = styled.div`
  grid-area: main;
  margin-top: 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 900px){
    margin-top: 0;
  }
`
export const NoPosts = styled.div`
  text-align: center;
  color: #303030;
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
`
export const Box = styled.div`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
`
export const MyLink = styled(Link)`
  background: #f28482;
  padding: 10px 15px;
  color: #303030;
  border-radius: 4px;
`
