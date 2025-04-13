import styles from './NavigationsWrapper.module.scss';
import BurgerNav from "../BurgerNav/BurgerNav"
import Navigation from "../Navigation/Navigation"

function NavigationsWrapper() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.burgerNav}>
                <BurgerNav />
            </div>
            <div className={styles.nav}>
                <Navigation />
            </div>
        </div>
    )
}

export default NavigationsWrapper