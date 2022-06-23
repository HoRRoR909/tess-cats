import React, { useState } from 'react'
import cat from '../../assets/img/cat.png'
import Order from '../order/Order'
import styles from './mystyle.module.scss'

const Card = ({taste, quantity, gift, happy, weight, isDisabled}) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    if (!isDisabled) {
      setIsActive(!isActive)
    }
  }

  return (
    <div 
      className={
        (isDisabled 
          ? `${styles.card_wrapper_default} ${styles.disabled}` 
          : (
            !isActive 
            ? styles.card_wrapper_default 
            : `${styles.card_wrapper_default} ${styles.selected}`
          )
        )
      }
      onClick={handleClick}
    >
      <section className={styles.text}>
        <p className={styles.p1}>Сказочное заморское явство</p>
        <h2 className={styles.title}>Нямушка</h2>
        <h3 className={styles.taste}>{taste}</h3>
        <p className={styles.describtion}>{quantity} порций <br /> {gift} <br /> {happy ? "заказчик доволен" : null }</p>
      </section>
      <img src={cat} width="320" height="272" alt="cat" />
      <div className={styles.order} >
        {!isDisabled ? <Order /> : `Печалька, ${taste} закончился.`}
      </div>
      <div className={styles.weight_block}>
        <p className={styles.weight}>{weight}</p>
        <p className={styles.kg}>кг</p>
      </div>
    </div>
  )
}

export default Card