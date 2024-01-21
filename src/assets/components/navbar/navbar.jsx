import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/">
          <div className={styles.imgcontainer}>
            <img src="/logo.png" className={styles.img} />
          </div>
        </Link>
      </div>
      <div className={styles.right}>
        <span className={styles.page}>
          <Link to="/aboutus">About us</Link>
        </span>
        <span className={styles.page}>
          <Link to="/apply">Apply</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
