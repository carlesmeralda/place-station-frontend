import styled, { createGlobalStyle } from 'styled-components'

export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ModalWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 1.5rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 800px;
  position: relative;
`

export const DisableScroll = createGlobalStyle`
  body{
    overflow: hidden;
  }
`
