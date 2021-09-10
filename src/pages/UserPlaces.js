import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PlacesList from '../components/places/PlacesList'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { Card } from '../globalStyles'
import { useHttp } from '../hooks/useHttp'

function UserPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([])
  const { isLoading, error, sendRequest } = useHttp()

  const userId = useParams().userId

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        )

        setLoadedPlaces(data.places)
      } catch (err) {}
    }
    fetchPlaces()
  }, [sendRequest, userId])

  const deletePlaceHandler = deletePlaceId => {
    setLoadedPlaces(prev => prev.filter(place => place.id !== deletePlaceId))
  }

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && !error && (
        <PlacesList places={loadedPlaces} onDeletePlace={deletePlaceHandler} />
      )}
      {error && <Card>{error}</Card>}
    </>
  )
}

export default UserPlaces
