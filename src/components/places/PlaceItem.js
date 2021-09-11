import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Card, Container, Button } from '../../globalStyles'
import { useHttp } from '../../hooks/useHttp'
import LoadingSpinner from '../ui/LoadingSpinner'
import Map from '../ui/Map'
import Modal from '../ui/Modal'

import {
  PlaceActions,
  PlaceAddress,
  PlaceContent,
  PlaceDesc,
  PlaceImage,
  PlaceInfo,
  PlaceLink,
  PlaceListItem,
  PlaceTitle,
} from './PlaceItem.styled'

function PlaceItem({
  id,
  title,
  image,
  description,
  coordinates,
  address,
  creatorId,
  onDeletePlace,
}) {
  const [modal, setModal] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  const { isLoading, error, sendRequest } = useHttp()
  const authCtx = useContext(AuthContext)

  const showConfirm = () => setConfirm(true)
  const cancelConfirm = () => setConfirm(false)

  const deleteHandler = async () => {
    setConfirm(false)
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/places/${id}`,
        'DELETE',
        null,
        { Authorization: 'Bearer ' + authCtx.token }
      )

      onDeletePlace(id)
    } catch (err) {}
  }

  return (
    <>
      <PlaceListItem>
        <Modal open={modal} close={closeModal}>
          <header>
            <h2>{address}</h2>
          </header>
          <div>
            <Map lat={coordinates.lat} lng={coordinates.lng} />
          </div>
          <footer>
            <Button onClick={closeModal}>Close</Button>
          </footer>
        </Modal>
        <Modal open={confirm} close={cancelConfirm}>
          <Container>
            <header>
              <h2>Are you sure?</h2>
            </header>
            <div>
              Do you want to proceed and delete this place?Please note that it
              can't be undone.
            </div>
            <footer>
              <Button onClick={cancelConfirm}>Cancel</Button>
              <Button primary onClick={deleteHandler}>
                Delete
              </Button>
            </footer>
          </Container>
        </Modal>
        <Card>
          {isLoading && <LoadingSpinner asOVerlay />}
          <PlaceContent>
            <PlaceImage
              src={process.env.REACT_APP_ASSET_URL + `/${image}`}
              alt={title}
            />
          </PlaceContent>
          <PlaceInfo>
            <PlaceTitle>{title}</PlaceTitle>
            <PlaceAddress>{address}</PlaceAddress>
            <PlaceDesc>{description}</PlaceDesc>
          </PlaceInfo>
          <PlaceActions>
            <Button onClick={openModal}>View</Button>
            {authCtx.userId === creatorId && authCtx.isAuth && (
              <>
                <PlaceLink to={`/places/${id}`}>Edit</PlaceLink>
                <Button primary onClick={showConfirm}>
                  Delete
                </Button>
              </>
            )}
          </PlaceActions>
        </Card>
      </PlaceListItem>
      {error && (
        <Card>
          <Container>{error}</Container>
        </Card>
      )}
    </>
  )
}

export default PlaceItem
