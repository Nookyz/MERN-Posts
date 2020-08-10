import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 10vh;
  right: 5vw;
`
export const Toast = styled.div`
  background: ${({type}) => type === 'error' ? '#e56b6f' : '#16db93'};
  border: 1px solid ${({type}) => type === 'error' ? '#b56576' : '#0db39e'};
  border-radius: 8px;
  padding: 10px 20px;
  justify-content: center;
  margin-bottom: 10px;
`