import React, { useState } from 'react'
import styles from './page1.module.css'
const Page1 = () => {
    const url="Enter the api endpoint here"
    const [data,setData]=useState({
        name:"",
        date:"",
        gender:"",
        phone:"",
        email:""
    })
  return (
    <div className={styles.formcontainer}>
    <form className={styles.form}>
        <div className={styles.inputcontain}>
        <span className={styles.label}> NAME </span>
        <input  className={styles.input}/>
        </div>
        <div className={styles.inputcontain}>
        <span className={styles.label}>DOB</span>
        <input className={styles.input} type='date' />
        </div>
        <div className={styles.inputcontain}>
        <span className={styles.label}>GENDER</span>
        <input className={styles.input}/>
        </div>
        <div className={styles.inputcontain}>
        <span className={styles.label} >PHONE NO.</span>
        <input className={styles.input} type="number" placeholder='Enter Your No.'/>
        </div>
        <div className={styles.inputcontain}>
        <span className={styles.label}>EMAIL ID</span>
        <input className={styles.input} placeholder='Enter your email id'/>
        </div>
        
    </form>
    <button className={styles.submit}>
        Next Page
    </button>
</div>
  )
}

export default Page1
