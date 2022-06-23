import React from 'react'
import styles from './mystyle.module.scss'

const Order = () => {
  return (
    <>
      <span className={styles.desc}>Чего сидишь? Порадуй котэ, </span>
      <span className={styles.blue}>купи</span>
    </>
  )
}

export default Order