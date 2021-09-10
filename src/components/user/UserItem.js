import React from 'react'

import Avatar from '../ui/Avatar'
import { Card } from '../../globalStyles'
import {
  UserListItem,
  UserLink,
  UserImage,
  UserInfo,
  UserName,
  UserPlace,
} from './UserItem.styled'

function UserItem({ id, name, image, placeCount }) {
  return (
    <UserListItem>
      <Card>
        <UserLink to={`/${id}/places`}>
          <UserImage>
            <Avatar image={`http://localhost:5000/${image}`} alt={name} />
          </UserImage>
          <UserInfo>
            <UserName>{name}</UserName>
            <UserPlace>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </UserPlace>
          </UserInfo>
        </UserLink>
      </Card>
    </UserListItem>
  )
}

export default UserItem
