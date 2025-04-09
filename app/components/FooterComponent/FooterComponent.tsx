import styles from './FooterComponent.module.scss';
import Image from 'next/image';
import SocialLinks from './SocialLinks/SocialLinks';

const FooterComponent = () => {
    return (
        <footer className={styles.background}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerFirstSection}>
                    <div className={styles.socialMedias}>
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={118}
                            height={38}
                            className={styles.image}
                        />
                        <p>ფინანსური აპლიკაცია, რომელიც დაგეხმარება დეკლარაციის უსწრაფესად შევსებაში</p>
                        <SocialLinks />
                    </div>
                    <nav className={styles.innerNavigation}>
                        <h4 className={styles.footerTitle}>ნავიგაცია</h4>
                        <ul>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">ჩვენი სერვისები</a>
                            </li>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">რას გთავაზობთ?</a>
                            </li>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">მომხმარებლის შეფასება</a>
                            </li>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">შეკითხვები</a>
                            </li>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">კონტაქტი</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className={styles.innerNavigation}>
                        <h4 className={styles.footerTitle}>მხარდაჭერა</h4>
                        <ul>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">Help center</a>
                            </li>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">Report a bug</a>
                            </li>
                            <li>
                                <a className={styles.footerSecondaryText} href="#">Chat support</a>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.contactsWrapper}>
                        <h4 className={styles.footerTitle}>დაგვიკავშირდი</h4>
                        <div className={styles.contacts}>
                            <div className={styles.contactsItem}>
                                <Image
                                    src="/email.svg"
                                    alt="email logo"
                                    width={20}
                                    height={20}
                                    className={styles.image}
                                />
                                <p className={styles.footerSecondaryText}>Avse@gmail.com</p>
                            </div>

                            <div className={styles.contactsItem}>
                                <Image
                                    src="/phone.svg"
                                    alt="phone logo"
                                    width={20}
                                    height={20}
                                    className={styles.image}
                                />
                                <p className={styles.footerSecondaryText}>(+995 577 55 55 55)</p>
                            </div>

                            <div className={styles.contactsItem}>
                                <Image
                                    src="/location.svg"
                                    alt="location logo"
                                    width={20}
                                    height={20}
                                    className={styles.image}
                                />
                                <p className={styles.footerSecondaryText}>Tbilisi, Georgia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>Copyright © 2025 AVSE</p>
                    <p>All Rights Reserved | <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent