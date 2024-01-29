import { useContext } from 'react';
import styles from './apply.module.css'
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
import { UserContext } from '../../../App';
const Apply = () => {
        const user = useContext(UserContext);
    if(1){

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
            <Page2/>
        </div>
    );
} 
return(
<card className={styles.login}>Pls LOGIN
</card>
);
}

export default Apply;