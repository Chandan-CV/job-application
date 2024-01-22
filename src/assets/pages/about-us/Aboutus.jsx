import styles from './aboutus.module.css'

const Aboutus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className = {styles.image} src='/aboutus1.png'/>
        <p className={styles.righttext}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium libero, sint repudiandae voluptas illum ducimus optio incidunt molestias eligendi, perspiciatis distinctio odit aliquid nobis ipsa ea repellat veritatis rerum! Dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut tempora ipsa blanditiis non. Quisquam nam quis suscipit, vero odio culpa exercitationem fugiat sequi ut, sint ipsa similique a labore!</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.lefttext}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis assumenda dolores illum blanditiis magni, laboriosam, fuga voluptas culpa sit atque sint placeat reiciendis possimus eum distinctio voluptatum alias eveniet ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati illo repellendus reprehenderit. Officia molestias dolore ipsum velit deleniti assumenda nesciunt, quas voluptatum distinctio odit quo explicabo beatae maxime molestiae?</p>
        <img className = {styles.image} src='/aboutus2.png'/>
      </div>
    </div>
  );
}

export default Aboutus
