import styles from './HeroBanner.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ReusableButton from '../ReusableButton/ReusableButton';

const HeroBanner = () => {
    const { basePath } = useRouter();

    return (
        <div className={styles.background}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroTitles}>
                    <h1>გადაიხადე დეკლარაცია ჩვენთან უსწრაფესად</h1>
                    <p>
                        შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან
                        დაკავშირებული ყველა პრობლემა.
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <div className={styles.joinUs}>
                            <ReusableButton title="შემოგვიერთდი" />
                        </div>
                        <div className={styles.more}>
                            <ReusableButton title="გაიგე მეტი" buttonColor="grayButton" />
                        </div>
                    </div>
                </div>
                <div className={styles.heroImages}>
                    <Image
                        src={`${basePath}/heroDesktop.png`}
                        alt="hero banner"
                        width={650}
                        height={650}
                        className={styles.heroDesktop}
                    />
                    <Image
                        src={`${basePath}/heroLaptop.png`}
                        alt="hero laptop banner"
                        width={326}
                        height={448}
                        className={styles.heroLaptop}
                    />
                    <Image
                        src={`${basePath}/heroPhone.png`}
                        alt="hero mobile banner"
                        width={430}
                        height={380}
                        className={styles.heroPhone}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
