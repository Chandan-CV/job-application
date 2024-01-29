import React, { useState } from "react";
import styles from "./page1.module.css";

const Page1 = () => {
  const apiUrl = "http://localhost:9191/applyPerson";

  const [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleSubmit = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Form submitted successfully:", result);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const inputFields = [
    { label: 'NAME', field: 'name', type: 'text' },
    { label: 'DOB', field: 'dob', type: 'date' },
    { label: 'GENDER', field: 'gender', type: 'radio', options: ['M', 'F'] },
    { label: 'PHONE NO.', field: 'phone', type: 'number' },
    { label: 'EMAIL ID', field: 'email', type: 'text' }
  ];

  return (
    <div className={styles.formcontainer}>
      <form className={styles.form}>
        {inputFields.map((field, index) => (
          <div key={index} className={styles.inputcontain}>
            <label className={styles.label}>{field.label}</label>
            {field.type === 'radio' ? (
              field.options.map((option, idx) => (
                <span key={idx} className={styles.radioinput}>
                  <input
                    id={option}
                    type="radio"
                    value={option}
                    checked={data[field.field] === option}
                    onChange={() => handleInputChange(field.field, option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </span>
              ))
            ) : (
              <input
                className={styles.input}
                type={field.type}
                placeholder={`Enter your ${field.label}`}
                value={data[field.field]}
                onChange={(e) => handleInputChange(field.field, e.target.value)}
              />
            )}
          </div>
        ))}
      </form>
      <button className={styles.submit} onClick={handleSubmit}>
        Next Page
      </button>
    </div>
  );
};

export default Page1;
