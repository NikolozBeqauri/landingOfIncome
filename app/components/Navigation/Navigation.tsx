import Link from 'next/link';
import styles from './Navigation.module.scss';
import ReusableButton from '../ReusableButton/ReusableButton';

const Navigation = () => {
  return (
    <div className={styles.background}>
      <nav className={styles.wrapper}>
      <span>LOGO</span>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li><a href="#services" className={styles.navLink}>ჩვენი სერვისები</a></li>
          <li><a href="#offer" className={styles.navLink}>რას გთავაზობთ? </a></li>
          <li><a href="#comments" className={styles.navLink}>ჩვენი მომხმარებლები </a></li>
          <li><a href="#questions" className={styles.navLink}>შეკითხვები</a></li>
          <li><a href="#contacts" className={styles.navLink}>კონტაქტი</a></li>
        </ul>
        <div className={styles.navButton}>
          <ReusableButton title={'გადმოწერა'}  borderRadius={8}/>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navigation;
