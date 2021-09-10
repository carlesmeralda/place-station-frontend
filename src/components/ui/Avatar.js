import React from 'react'

import styles from './Avatar.module.css'

function Avatar({ image, alt, width, height }) {
  return (
    <div className={styles.avatar}>
      <img src={image} alt={alt} style={{ width, height }} />
    </div>
  )
}

export default Avatar
