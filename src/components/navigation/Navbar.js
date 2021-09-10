import React, { useState, useContext } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.styled'
import { Button } from '../../globalStyles'
import { AuthContext } from '../../context/AuthContext'

function Navbar() {
  const [click, setClick] = useState(false)
  const clickHandler = () => setClick(prev => !prev)

  const authCtx = useContext(AuthContext)

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/home">
          <NavIcon />
          MernApp
        </NavLogo>
        <MobileIcon onClick={clickHandler}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={clickHandler} click={click}>
          <NavItem>
            <NavLinks to="/">All Users</NavLinks>
          </NavItem>
          {authCtx.isAuth && (
            <NavItem>
              <NavLinks to={`/${authCtx.userId}/places`}>My Places</NavLinks>
            </NavItem>
          )}
          {authCtx.isAuth && (
            <NavItem>
              <NavLinks to="/places/new">Add Place</NavLinks>
            </NavItem>
          )}
          {!authCtx.isAuth && (
            <NavItemBtn>
              <NavBtnLink to="/auth">
                <Button>Login</Button>
              </NavBtnLink>
            </NavItemBtn>
          )}
          {authCtx.isAuth && (
            <NavItemBtn>
              <NavBtnLink to="#">
                <Button onClick={authCtx.logout}>Logout</Button>
              </NavBtnLink>
            </NavItemBtn>
          )}
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}
export default Navbar
