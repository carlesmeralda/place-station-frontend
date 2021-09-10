import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  main {
    margin-top: 3rem;
  }
`

export const Container = styled.div`
  padding: 2rem;
  position: relative;
`

export const Card = styled.div`
  margin: 0 auto;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background-color: #fff;
  padding: 0;
  width: 90%;
  max-width: 500px;
`

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  &:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }
`

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export default GlobalStyle
