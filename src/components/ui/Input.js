import React, { useReducer, useEffect } from 'react'

import { validate } from '../../assets/utils/validators'

import {
  FormControl,
  FormInput,
  FormLabel,
  FormTextArea,
  InvalidInput,
} from './Input.styled'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      }
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      }
    default:
      return state
  }
}

function Input({
  el,
  id,
  label,
  type,
  placeholder,
  rows,
  errorText,
  validators,
  onInput,
  initValue,
  initValid,
}) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initValue || '',
    isValid: initValid || false,
    isTouched: false,
  })

  const { value, isValid } = inputState
  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, onInput, value, isValid])

  const changeHandler = e => {
    dispatch({
      type: 'CHANGE',
      val: e.target.value,
      validators,
    })
  }

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' })
  }

  const element =
    el === 'input' ? (
      <FormInput
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        onChange={changeHandler}
        value={inputState.value}
        isValid={inputState.isValid}
        isTouched={inputState.isTouched}
        onBlur={touchHandler}
      />
    ) : (
      <FormTextArea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        value={inputState.value}
        isValid={inputState.isValid}
        isTouched={inputState.isTouched}
        onBlur={touchHandler}
      />
    )

  return (
    <FormControl>
      <FormLabel htmlFor={id} isValid={inputState.isValid}>
        {label}
      </FormLabel>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <InvalidInput>{errorText}</InvalidInput>
      )}
    </FormControl>
  )
}

export default Input
