import React, { useRef, useState, useEffect } from 'react'
import { Container, Button } from '../../globalStyles'

import './ImageUpload.css'

function ImageUpload({ id, center, onInput, errorText }) {
  const [file, setFile] = useState()
  const [previewUrl, setPreviewUrl] = useState()
  const [isValid, setIsValid] = useState(false)

  const imagePickerRef = useRef()

  useEffect(() => {
    if (!file) return

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const chooseImageHandler = e => {
    let pickedFile
    let fileIsValid = isValid
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0]
      setFile(pickedFile)
      setIsValid(true)
      fileIsValid = true
    } else {
      setIsValid(false)
      fileIsValid = false
    }

    onInput(id, pickedFile, fileIsValid)
  }

  const pickImageHandler = () => {
    imagePickerRef.current.click()
  }

  return (
    <Container>
      <input
        id={id}
        ref={imagePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={chooseImageHandler}
      />
      <div className={`image-upload ${center && 'center'}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          Pick Image
        </Button>
      </div>
      {!isValid && <p>{errorText}</p>}
    </Container>
  )
}

export default ImageUpload
