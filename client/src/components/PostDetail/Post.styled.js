import styled from 'styled-components'

export const MyPost = styled.div`
  display: grid;
  grid-template-columns: auto 100px 100px;
  grid-template-areas: "title title delete"
                      "content content content"
                       "footer type date";                         
  gap: 10px;
  padding: 20px;
  min-height: 100px;
  :hover{
    background: #fff4f2;
  }

  @media only screen and (max-width: 600px){
    grid-template-columns: auto 80px 100px;
    grid-template-areas: "title title delete"
                          "content content content"
                          "footer type date";
    gap: 0;
    padding: 5px;
  }
`

export const Content = styled.div`
  grid-area: content;
  font-size: 18px;
  font-weight: 500;
  color: #303030;
  padding: 5px 0;
`
