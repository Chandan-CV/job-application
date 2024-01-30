import React from 'react'
import styles from './success.module.css'
const Success = () => {
  return (
    <div className={styles.container}>
      Thank you for your submission!!!
      Your response has been noted
      <div className={styles.circle}>
      <div className={styles.tick}></div>
      </div>
    </div>
  )
}

export default Success
