import { useContext } from "react";
import styles from "./apply.module.css";
import Page1 from "./page1/Page1";
import { UserContext } from "../../../App";
const Apply = () => {
  const user = useContext(UserContext);

  if (user) {
    return (
      <div className={styles.container}>
        <div className={styles.bar}>
          <span>
            <img src="/school.svg" className={styles.svg} />
          </span>
          <span>
            <img src="account_circle.svg" className={styles.svg} />
          </span>
          <span className={styles.line}></span>
        </div>
        <Page1 />
      </div>
    );
  }
  return <div className={styles.login}>Please Login</div>;
};

export default Apply;
