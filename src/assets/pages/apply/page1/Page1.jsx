import { useState, useContext } from "react";
import styles from "./page1.module.css";
import { UserContext } from "../../../../App";

const Page1 = () => {
  const apiUrl = "http://localhost:9191/user/addDetails/";
  const fileUrl = "http://localhost:9191/user/upload/";
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

  const [file, setFile] = useState("");

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const HandleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(fileUrl + userEmail, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("File uploaded successfully:", result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const textSubmit = async () => {
    try {
      const response = await fetch(apiUrl + userEmail, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await textSubmit();
      await HandleUpload();
    } catch (error) {
      console.log(error);
    }
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
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <div className={styles.inputcontain}>
          <label className={styles.label}>Resume</label>
          <div className={styles.file}>
            <input type="file" onChange={handleFile} />
          </div>
        </div>
        <button type="submit" className={styles.submit}>
          Save Details & Upload Resume
        </button>
      </form>
    </div>
  );
};

export default Page1;
