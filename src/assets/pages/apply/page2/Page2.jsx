import React, { useState } from 'react'
import styles from './page2.module.css'
const Page2 = () => {
  const studyurl= "http://localhost:9191/applyStudy";
  const fileurl="url"
  const [data, setData] = useState({
    hsc: "",
    ssc: "",
    cgpa: "",
    phone: "",
    skills:"",
  });
  const [file,setFile]=useState("")
  function handleFile(event){
   setFile(event.target.files[0]) 
  }
  function HandleUpload(){
    const formData = new FormData()
    formData.append('file',file)
    fetch(
      studyurl,{
        method: "POST",
        body: formData
      }
    ).then((response)=>response.json()).then((result)=>{
      console.log('file upload success',result)
    })
    
    
  }
  function HandleChange(field,value){
    setData({...data,[field]:value})
    console.log(data)
  }
  const StudySubmit = () => {
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
  async function HandleSubmit() {
    try {
       
        await StudySubmit();

    } catch (error) {
        console.error("Error in HandleSubmit:", error);
    }
}

  return (
    <div className={styles.formcontainer}>
    <form className={styles.form}>
        <div className={styles.inputcontain}>
        <label className={styles.label}> 10TH MARKS </label>
        <input  className={styles.input} type='number'  min="1" max="100" onChange={(e)=>HandleChange("hsc",e.target.value)} value={data.hsc}/>
        </div>
        <div className={styles.inputcontain}>
        <label className={styles.label}>12TH MARKS</label>
        <input className={styles.input} type='number' min="1" max="100" onChange={(e)=>HandleChange("ssc",e.target.value)} value={data.ssc}/>
        </div>
        <div className={styles.inputcontain}>
        <label className={styles.label}>CGPA Acquired</label>
        <input className={styles.input} type='number' min="1" max="100" onChange={(e)=>HandleChange("cgpa",e.target.value)} value={data.cgpa}/>
        </div>
        <div className={styles.inputcontain}>
        <label className={styles.label}>skills</label>
        <input className={styles.input} type='text' onChange={(e)=>HandleChange("skills",e.target.value)} value={data.skills}/>
        </div>
        <div className={styles.inputcontain}>
        <label className={styles.label}>resume</label>
        <div className={styles.file}>
        <input  type='file' onChange={handleFile} />
        </div>
        </div>
        
    </form>
    <button className={styles.submit} onClick={()=>HandleSubmit()}>
        Next Page
    </button>
</div>

  )
}

export default Page2
