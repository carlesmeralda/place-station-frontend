import React, { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Card, Button, Container } from '../globalStyles'
import Input from '../components/ui/Input'

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../assets/utils/validators'

import { useForm } from '../hooks/useForm'
import { useHttp } from '../hooks/useHttp'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { AuthContext } from '../context/AuthContext'

function UpdatePlace() {
  const history = useHistory()
  const { isLoading, error, sendRequest } = useHttp()

  const authCtx = useContext(AuthContext)

  const [loadedPlace, setLoadedPlace] = useState()
  const placeId = useParams().placeId

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: true,
    },
    description: {
      value: '',
      isValid: true,
    },
  })

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const data = await sendRequest(
          `http://localhost:5000/api/places/${placeId}`
        )
        setLoadedPlace(data.place)
        setFormData(
          {
            title: {
              value: data.place.title,
              isValid: true,
            },
            description: {
              value: data.place.description,
              isValid: true,
            },
          },
          true
        )
      } catch (err) {}
    }
    fetchPlace()
  }, [placeId, sendRequest, setFormData])

  const submitHandler = async e => {
    e.preventDefault()
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${placeId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        { 'Content-Type': 'application/json' }
      )
      history.push(`/${authCtx.userId}/places/`)
    } catch (err) {}
  }

  if (isLoading) {
    return <LoadingSpinner asOverlay />
  }

  if (!loadedPlace && !error) {
    return (
      <Card>
        <Container>
          <h2>Could not find a place</h2>
        </Container>
      </Card>
    )
  }

  return (
    <>
      <Card>
        <Container>
          {!isLoading && loadedPlace && (
            <form onSubmit={submitHandler}>
              <Input
                el="input"
                id="title"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                onInput={inputHandler}
                initValue={loadedPlace.title}
                initValid={true}
              />

              <Input
                el="textarea"
                id="description"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters"
                onInput={inputHandler}
                initValue={loadedPlace.description}
                initValid={true}
              />
              <Button disabled={!formState.isValid}>Update Place</Button>
            </form>
          )}
        </Container>
      </Card>
      {error && (
        <Card>
          <Container>{error}</Container>
        </Card>
      )}
    </>
  )
}

export default UpdatePlace
