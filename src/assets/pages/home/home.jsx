import styles from "./home.module.css";

const Home = () => {
  return (
  <div className={styles.home}>
    <div className="background-image">
      <img className="cover-image" src="/home.png" />
    </div>
  </div>
  );
};

export default Home;
