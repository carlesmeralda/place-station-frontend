import React, { useContext } from 'react'
import { useHistory } from 'react-router'

import { useForm } from '../hooks/useForm'

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../assets/utils/validators'

import Input from '../components/ui/Input'
import { Card, Button, Container } from '../globalStyles'
import { useHttp } from '../hooks/useHttp'
import { AuthContext } from '../context/AuthContext'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ImageUpload from '../components/shared/ImageUpload'

function NewPlace() {
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const { isLoading, error, sendRequest } = useHttp()
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  )

  const addPlaceHandler = async e => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('title', formState.inputs.title.value)
      formData.append('description', formState.inputs.description.value)
      formData.append('address', formState.inputs.address.value)
      formData.append('image', formState.inputs.image.value)
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places`,
        'POST',
        formData,
        {
          Authorization: 'Bearer ' + authCtx.token,
        }
      )

      history.push('/')
    } catch (err) {}
  }

  return (
    <>
      <Card>
        <Container>
          {isLoading && <LoadingSpinner asOverlay />}
          <form onSubmit={addPlaceHandler}>
            <Input
              el="input"
              id="title"
              type="text"
              label="Title"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid title"
              onInput={inputHandler}
            />
            <Input
              el="textarea"
              id="description"
              label="Description"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid description (at least 5 characters)"
              onInput={inputHandler}
            />
            <Input
              el="input"
              id="address"
              type="text"
              label="Addres"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address"
              onInput={inputHandler}
            />
            <ImageUpload
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image"
            />
            <Button disabled={!formState.isValid}>Add Place</Button>
          </form>
        </Container>
      </Card>
      {error && <Card>{error}</Card>}
    </>
  )
}

export default NewPlace
