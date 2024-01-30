import { useState, useContext } from "react";
import styles from "./page3.module.css";
import { UserContext } from "../../../../App";

const Page3 = () => {
  const [file, setFile] = useState("");
  const fileurl = "http://localhost:9191/user/upload/";
  const userEmail = useContext(UserContext).email;
  function handleFile(event) {
    setFile(event.target.files[0]);
  }
  function HandleUpload() {
    const formData = new FormData();
    formData.append("file", file);
    fetch(fileurl+userEmail, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("file upload success", result);
      });
  }
  return (
    <div className={styles.inputcontain}>
      <label className={styles.label}>resume</label>
      <div className={styles.file}>
        <input type="file" onChange={handleFile} />
      </div>

      <button onClick={() => HandleUpload()} className={styles.submit}>
        Upload Resume
      </button>
    </div>
  );
};

export default Page3;
