import React from 'react'
import { Card, Container } from '../../globalStyles'
import { useHttp } from '../../hooks/useHttp'
import UserItem from './UserItem'

import { UserList } from './UsersList.styled'

function UsersList({ users }) {
  const { isLoading } = useHttp()

  if (!isLoading && users.length === 0) {
    return (
      <Card>
        <Container>
          <h2>No users found.</h2>
        </Container>
      </Card>
    )
  }

  return (
    <UserList>
      {users.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places.length}
        />
      ))}
    </UserList>
  )
}

export default UsersList
