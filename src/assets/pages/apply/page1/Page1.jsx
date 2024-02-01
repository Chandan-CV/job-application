import { useState, useContext, useEffect } from "react";
import styles from "./page1.module.css";
import { UserContext } from "../../../../App";
import Success from "../../../components/Success/Success";

const Page1 = () => {
  const userEmail = useContext(UserContext).email;
  const apiUrl = "http://localhost:9191/user/addDetails/";
  const fileUrl = "http://localhost:9191/user/upload/";
  const smsUrl = "http://localhost:9191/processSMS";
  const getInfoUrl = "http://localhost:9191/user/getUserInfo/" + userEmail;

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
  const [submitted, setSubmitted] = useState(false); // New state for tracking form submission

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(getInfoUrl);
        const userData = await response.json();
  
        // Update the state with existing user data
        setData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData(); // Call the function directly without adding it to the dependency array
  }, [getInfoUrl, userEmail]);

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const resumeLink = data.resumeUrl ? (
    <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer">
      View Uploaded Resume
    </a>
  ) : null;

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    const f = document.getElementById("resume-title");
    f.innerText = event.target.files[0].name;
  };

  const handleUpload = async () => {
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
      // Check for null values and update numeric fields to null if 0
      const sanitizedData = { ...data };
      // Check if any value is 0 and set the entire data object to null
      if (
        Object.values(sanitizedData).includes(0) ||
        Object.values(sanitizedData).includes("0")
      ) {
        console.error("Please fill in all required fields.");
        return;
      }

      // Proceed with submission
      await textSubmit();
      await handleUpload();

      const phoneNo = data.phone;

      const smsRequest = {
        destinationSMSNumber: phoneNo,
        smsMessage: "Form submitted successfully!",
      };

      const sendSMS = async () => {
        try {
          const response = await fetch(smsUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(smsRequest),
          });
          const result = await response.json();
          console.log(result);
          setSubmitted(true); 
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };

      sendSMS();
      // Mark the form as submitted
    } catch (error) {
      console.log(error);
    }
  };

  const inputFields = [
    { label: "NAME", field: "name", type: "text" },
    { label: "DOB", field: "dob", type: "date" },
    { label: "GENDER", field: "gender", type: "radio", options: ["M", "F"] },
    { label: "PHONE NO.", field: "phone", type: "text" },
    { label: "10TH MARKS", field: "tenthBoardPercent", type: "number" },
    { label: "12TH MARKS", field: "twelfthBoardPercent", type: "number" },
    { label: "CGPA Acquired", field: "collegeCgpa", type: "number" },
    { label: "College Name", field: "collegeName", type: "text" },
  ];

  if (submitted) {
    return <Success />;
  }

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
          <div className={styles.fileInputContainer}>
            <label htmlFor="resumeUpload" className={styles.fileInputLabel}>
              Choose a file
            </label>
            <input
              id="resumeUpload"
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={handleFile}
              className={styles.fileInput}
            />
            <p id="resume-title" className={styles.resumetitle}></p>
            {resumeLink}
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
