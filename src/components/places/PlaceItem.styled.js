import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../../globalStyles'

export const PlaceListItem = styled.li`
  margin: 1rem 0;
`

export const PlaceInfo = styled.div`
  padding: 1rem;
`

export const PlaceContent = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;
`

export const PlaceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PlaceTitle = styled.h2`
  margin-bottom: 0.5rem;
`

export const PlaceAddress = styled.h3`
  margin-bottom: 0.5rem;
`

export const PlaceDesc = styled.p`
  margin-bottom: 0.5rem;
`

export const PlaceActions = styled.div`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;
`

export const PlaceButtons = styled(Button)`
  margin: 0.5rem;
  padding: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  width: 25%;
`

export const PlaceLink = styled(Link)`
  margin: 0.5rem;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid #101522;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: #101522;
`
