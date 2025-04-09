import Link from 'next/link';
import styles from './Navigation.module.scss';
import ReusableButton from '../ReusableButton/ReusableButton';

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <span>LOGO</span>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li><Link href="#services" className={styles.navLink}>ჩვენი სერვისები</Link></li>
          <li><Link href="#offer" className={styles.navLink}>რას გთავაზობთ? </Link></li>
          <li><Link href="#comments" className={styles.navLink}>ჩვენი მომხმარებლები </Link></li>
          <li><Link href="#questions" className={styles.navLink}>შეკითხვები</Link></li>
          <li><Link href="#contacts" className={styles.navLink}>კონტაქტი</Link></li>
        </ul>
        <ReusableButton title={'გადმოწერა'} paddingHorizontal={32}  borderRadius={8}/>
      </div>
    </nav>
  );
};

export default Navigation;
