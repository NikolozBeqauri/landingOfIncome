import styles from './HeroBanner.module.scss'
import Image from 'next/image';
import ReusableButton from '../ReusableButton/ReusableButton';

const HeroBanner = () => {
    return (
        <div className={styles.background}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroTitles}>
                    <h1>გადაიხადე დეკლარაცია ჩვენთან უსწრაფესად</h1>
                    <p>
                        შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან
                        დაკავშირებული ყველა პრობლემა.
                    </p>
                    <div className={styles.buttons}>
                        <div className={styles.joinUs}>
                            <ReusableButton title={'შემოგვიერთდი'} />
                        </div>
                        <div className={styles.more}>
                            <ReusableButton title={'გაიგე მეტი'} buttonColor='grayButton' />
                        </div>
                    </div>
                </div>
                <Image
                    src="/heroBanner.png"
                    alt="hero banner"
                    width={630}
                    height={650}
                    className={styles.heroImage}
                />
                <Image
                    src="/smallHeroImage.png"
                    alt="hero banner"
                    width={456}
                    height={478}
                    className={styles.smallHeroImage}
                />
            </div>
        </div>
    )
}

export default HeroBanner