import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const UserLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 1rem;
  color: white;
  background: #292929;

  &:hover,
  &:active {
    background-color: #ffd900;
  }
`

export const UserImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`
export const UserInfo = styled.div``

export const UserName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  color: #ffd900;
`
export const UserPlace = styled.h3`
  margin: 0;
`
export const UserListItem = styled.div`
  margin: 1rem;
  width: calc(45% - 2rem);
  min-width: 17.5rem;

  &:hover ${UserName} {
    color: #292929;
  }
  &:hover ${UserPlace} {
    color: #292929;
  }
`
