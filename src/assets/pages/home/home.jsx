import styles from "./home.module.css";

const Home = () => {
  return (
  <div className={styles.home}>
    <div className={styles.background}>
      <img className={styles.cover} src="/home.png" />
    </div>
  </div>
  );
};

export default Home;
