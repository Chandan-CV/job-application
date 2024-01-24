import styles from './apply.module.css'
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
const Apply = () => {
    return(
        <div className={styles.container}>
            <div className={styles.bar}>
                <span>
                <img  src='/school.svg' className={styles.svg}/>
                </span>
                <span>
                <img src='account_circle.svg' className={styles.svg}/>
                </span>
                <span className={styles.line}></span>
            </div>
           <Page1/>
        </div>
    );
}

export default Apply;