import { useContext } from "react";
import { loginwithGoogle, logout } from "../../../firebaseConfig";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const user = useContext(UserContext);
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
        <span className={styles.page} >
          {user? <span onClick={logout}>Logout</span>:<span onClick={loginwithGoogle}>Login</span>}
          </span>
      </div>
    </div>
  );
};

export default Navbar;
