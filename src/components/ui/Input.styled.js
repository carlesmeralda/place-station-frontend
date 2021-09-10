import styled from 'styled-components'

export const FormControl = styled.div`
  margin: 1.2rem 0;
`

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const FormInput = styled.input`
  display: block;
  width: 100%;
  border: ${({ isValid, isTouched }) =>
    isValid && !isTouched ? '1px solid #ccc' : 'red'};
  background: #f1f1f1;
  padding: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: ${({ isValid, isTouched }) =>
      isValid && !isTouched ? '1px solid #ccc' : 'red'};
  }
`

export const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  border: ${({ isValid, isTouched }) =>
    isValid && !isTouched ? '1px solid #ccc' : 'red'};
  background: #f8f8f8;
  padding: 0.25rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: ${({ isValid, isTouched }) =>
      isValid && !isTouched ? '1px solid #ccc' : 'red'};
  }
`

export const InvalidInput = styled.span`
  color: red;
`
