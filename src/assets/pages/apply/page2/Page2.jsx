import React from 'react'
import styles from './page2.module.css'
const Page2 = () => {
  return (
    <div className={styles.formcontainer}>
    <form className={styles.form}>
        <div className={styles.inputcontain}>
        <span className={styles.label}> 10TH MARKS </span>
        <input  className={styles.input}/>
        </div>
        <div className={styles.inputcontain}>
        <span className={styles.label}>12TH MARKS</span>
        <input className={styles.input} />
        </div>
        <div className={styles.inputcontain}>
        <span className={styles.label}>12th MARKS</span>
        <input className={styles.input}/>
        </div>
        <div className={styles.inputcontain}>
        <span className={styles.label}>CGPA Acquired</span>
        <input className={styles.input}/>
        </div>
        
    </form>
    <button className={styles.submit}>
        Next Page
    </button>
</div>

  )
}

export default Page2
