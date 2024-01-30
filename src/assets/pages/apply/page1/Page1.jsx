import { useContext, useState } from "react";
import styles from "./page1.module.css";
import { UserContext } from "../../../../App";

const Page1 = () => {
  const apiUrl = "http://localhost:9191/user/addDetails/";
  const userEmail = useContext(UserContext).email;
  const [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    tenthBoardPercent: "",
    twelfthBoardPercent: "",
    collegeCgpa: "",
    collegeName: "",
  });

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiUrl+userEmail, {
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
    console.log(data);
  };

  const inputFields = [
    { label: "NAME", field: "name", type: "text" },
    { label: "DOB", field: "dob", type: "date" },
    { label: "GENDER", field: "gender", type: "radio", options: ["M", "F"] },
    { label: "PHONE NO.", field: "phone", type: "number" },
    { label: "10TH MARKS", field: "tenthBoardPercent", type: "number" },
    { label: "12TH MARKS", field: "twelfthBoardPercent", type: "number" },
    { label: "CGPA Acquired", field: "collegeCgpa", type: "number" },
    { label: "College Name", field: "collegeName", type: "text" },
  ];

  return (
    <div className={styles.formcontainer}>
      <form className={styles.form}>
        {inputFields.map((field, index) => (
          <div key={index} className={styles.inputcontain}>
            <label className={styles.label}>{field.label}</label>
            {field.type === "radio" ? (
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
        Save Details
      </button>
    </div>
  );
};

export default Page1;
