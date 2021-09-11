import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { Button, Card, Container, FormActions } from '../globalStyles'

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../assets/utils/validators'
import Input from '../components/ui/Input'

import { useForm } from '../hooks/useForm'
import { useHttp } from '../hooks/useHttp'
import { AuthContext } from '../context/AuthContext'

import LoadingSpinner from '../components/ui/LoadingSpinner'
import ImageUpload from '../components/shared/ImageUpload'

function Auth() {
  const authCtx = useContext(AuthContext)
  const history = useHistory()
  const { isLoading, error, sendRequest } = useHttp()

  const [loginMode, setLoginMode] = useState(true)

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  const authSubmitHandler = async e => {
    e.preventDefault()

    if (loginMode) {
      try {
        const data = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),

          { 'Content-Type': 'application/json' }
        )

        authCtx.login(data.userId, data.token)
        history.push('/')
      } catch (err) {
        // console.log(err)
      }
    } else {
      try {
        const formData = new FormData()
        formData.append('name', formState.inputs.name.value)
        formData.append('email', formState.inputs.email.value)
        formData.append('password', formState.inputs.password.value)
        formData.append('image', formState.inputs.image.value)
        const data = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/users/signup',
          'POST',
          formData
        )

        authCtx.login(data.userId, data.token)
        console.log(data.userId)
        history.push('/')
      } catch (err) {
        // console.log(err)
      }
    }
  }

  const switchHandler = () => {
    if (!loginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      )
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
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
    }
    setLoginMode(prev => !prev)
  }

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}

      {!isLoading && (
        <Card>
          <Container>
            <div>
              <h2>Welcome to our App</h2>
            </div>
            <form onSubmit={authSubmitHandler}>
              {!loginMode && (
                <>
                  <Input
                    el="input"
                    id="name"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name"
                    onInput={inputHandler}
                  />
                  <ImageUpload
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image"
                  />
                </>
              )}
              <Input
                el="input"
                id="email"
                type="email"
                label="Email"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email"
                onInput={inputHandler}
              />
              <Input
                el="input"
                id="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(7)]}
                errorText="Please enter a valid password (at least 7 characters."
                onInput={inputHandler}
              />
              <FormActions>
                <Button disabled={!formState.isValid}>
                  {loginMode ? 'LOGIN' : 'SIGNUP'}
                </Button>
                <Button type="button" primary onClick={switchHandler}>
                  Switch to {loginMode ? 'Signup' : 'Login'}
                </Button>
              </FormActions>
            </form>
          </Container>
        </Card>
      )}
      {error && (
        <Card>
          <h2>{error}</h2>
        </Card>
      )}
    </>
  )
}

export default Auth
