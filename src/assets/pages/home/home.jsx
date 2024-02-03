import styles from "./home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
  <div className={styles.home}>
    <div className={styles.background}>
      <div className={styles.text}>
      <h1 className={styles.heading}>
        Care4edu 
      </h1>
      <h6 className={styles.para}>
        We help students and professionals land their dream job

      </h6>
      <Link to="/apply">
      <div className={styles.start}>Start</div>
      </Link>
      </div>

    </div>
  </div>
  );
};

export default Home;
