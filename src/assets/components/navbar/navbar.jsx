import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}> 
        <div className={styles.imgcontainer}>
          <img src='/logo.png' className={styles.img}/>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.page}>
          About us
        </span>
        <span className={styles.page}>
          Apply
        </span>
      </div>
    </div>
  )
}

export default Navbar
