import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import styles from  './mystyle.module.scss'

const CardContainer = () => {

  const {cards} = useSelector(state => state.cards)
  
  return (
      <div className={(cards.length < 4) ? styles.container : `${styles.container} ${styles.three_plus}`}>
        <h1 className={styles.header}>Ты сегодня покормил кота?</h1>
        <div className={styles.card_container}>
          {cards && cards.map(card => <Card {...card} key={card.id} />)}
        </div>
      </div>
  )
}

export default CardContainer