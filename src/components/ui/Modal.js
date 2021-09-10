import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import {
  DisableScroll,
  ModalBg,
  ModalContent,
  ModalWrapper,
} from './Modal.styled'

const modalRoot = document.getElementById('modal-root')

function Modal({ open, close, children }) {
  const wrapperRef = useRef()

  useEffect(() => {
    if (!open) return

    function listener(e) {
      if (wrapperRef.current?.contains(e.target)) return
      close()
    }

    window.addEventListener('click', listener)

    return () => {
      window.removeEventListener('click', listener)
    }
  }, [open, close])

  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <ModalBg>
        <ModalWrapper ref={wrapperRef}>
          <ModalContent>{children}</ModalContent>
        </ModalWrapper>
      </ModalBg>
      <DisableScroll />
    </>,
    modalRoot
  )
}

export default Modal
