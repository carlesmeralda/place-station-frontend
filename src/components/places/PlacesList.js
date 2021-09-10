import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Container } from '../../globalStyles'
import { useHttp } from '../../hooks/useHttp'
import PlaceItem from './PlaceItem'

import { PlaceList } from './PlacesList.styled'

function PlacesList({ places, onDeletePlace }) {
  const { isLoading } = useHttp()

  if (!isLoading && places.length === 0) {
    return (
      <Card>
        <Container>
          <h2>No places found. Want to create one?</h2>
          <Link to="/places/new">
            <Button>Share Place</Button>
          </Link>
        </Container>
      </Card>
    )
  }

  return (
    <PlaceList>
      {places.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          image={place.image}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDeletePlace={onDeletePlace}
        />
      ))}
    </PlaceList>
  )
}

export default PlacesList
