import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.contact}>
          <img src="phone.svg" className={styles.icon} />
          <span>+91 87963759562</span>
        </span>
        <span className={styles.contact}>
          <img src="contact.svg" className={styles.icon} />
          <span>xyz@gmail.com</span>
        </span>
      </div>
      <div className={styles.right}>
        <a href="">
          <img className={styles.img} src="/x.svg" />
        </a>
        <a href="">
          <img className={styles.img} src="/insta.svg" />
        </a>
        <a href="">
          <img className={styles.img} src="/facebook.svg" />
        </a>
        <a href="">
          <img className={styles.img} src="/linkedin.svg" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
