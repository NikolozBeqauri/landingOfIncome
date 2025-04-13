'use client'
import Image from 'next/image';
import styles from './BurgerNav.module.scss';
import ReusableButton from '../ReusableButton/ReusableButton';
import { useState } from 'react';

const BurgerNav = () => {
    const [active, setActive] = useState(false)

    return (
        <div className={`${styles.background} ${active ? styles.backgroundActive : ''}`} onClick={()=>setActive(!active)}>
            <nav className={styles.wrapper}>
            <div className={styles.header}>
                <span>LOGO</span>
                <Image
                    src="/burger.svg"
                    alt="burger nemu"
                    width={40}
                    height={40}
                    className={styles.burgerIcon}
                    onClick={() => {setActive(!active);}}
                />
            </div>
            <div className={`${styles.navWrapper} ${active ? styles.active : ''}`}>
                <ul className={styles.navList}>
                    <li><a href="#services" className={styles.navLink}>ჩვენი სერვისები</a></li>
                    <li><a href="#offer" className={styles.navLink}>რას გთავაზობთ? </a></li>
                    <li><a href="#comments" className={styles.navLink}>ჩვენი მომხმარებლები </a></li>
                    <li><a href="#questions" className={styles.navLink}>შეკითხვები</a></li>
                    <li><a href="#contacts" className={styles.navLink}>კონტაქტი</a></li>
                </ul>
                <div className={styles.navButton}>
                    <ReusableButton title={'გადმოწერა'} borderRadius={8} />
                </div>
            </div>
        </nav>
        </div>
    );
};

export default BurgerNav;
