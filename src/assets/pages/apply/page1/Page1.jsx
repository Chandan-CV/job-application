import React, { useState } from 'react';
import styles from './page1.module.css';

const Page1 = () => {
    const url = "Enter the api endpoint here";
    const [data, setData] = useState({
        name: "",
        date: "",
        gender: "",
        phone: "",
        email: ""
    });

    const handleInputChange = (field, value) => {
        setData({ ...data, [field]: value })
        
    };

    const handleSubmit = () => {
        
        console.log("Form submitted:", data);
    };

    return (
        <div className={styles.formcontainer}>
            <form className={styles.form}>
                <div className={styles.inputcontain}>
                    <label className={styles.label}> NAME </label>
                    <input
                        className={styles.input}
                        value={data.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                </div>
                <div className={styles.inputcontain}>
                    <label className={styles.label}>DOB</label>
                    <input
                        className={styles.input}
                        type='date'
                        value={data.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                    />
                </div>
                <div className={styles.inputcontain}>
                    <label className={styles.label}>GENDER</label>
                    <span className={styles.radioinput} >
                    <input
                        id="M"
                        type="radio"
                        value="M"
                        checked={data.gender === "M"}
                        onChange={() => handleInputChange('gender', 'M')}
                    />
                    
                    <label htmlFor="M"> Male</label>
                    </span>
                   <span className={styles.radioinput}>
                    <input
                        id="F"
                        type="radio"
                        value="F"
                        checked={data.gender === "F"}
                        onChange={() => handleInputChange('gender', 'F')}
                    />
                    <label htmlFor="F"> Female</label>
                    </span>
                </div>
                <div className={styles.inputcontain}>
                    <label className={styles.label} >PHONE NO.</label>
                    <input
                        className={styles.input}
                        type="number"
                        placeholder='Enter Your No.'
                        value={data.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                </div>
                <div className={styles.inputcontain}>
                    <label className={styles.label}>EMAIL ID</label>
                    <input
                        className={styles.input}
                        placeholder='Enter your email id'
                        value={data.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                </div>
            </form>
            <button className={styles.submit} onClick={handleSubmit}>
                Next Page
            </button>
        </div>
    );
};

export default Page1;
