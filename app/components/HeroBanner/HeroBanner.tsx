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
                        <ReusableButton title={'შემოგვიერთდი'} paddingHorizontal={88} paddingVertical={10} />
                        <ReusableButton title={'გაიგე მეტი'} buttonColor='grayButton' paddingHorizontal={70} paddingVertical={10} />
                    </div>
                </div>
                <Image
                    src="/heroBanner.png"
                    alt="hero banner"
                    width={630}
                    height={650}
                    className={styles.heroImage}
                />
            </div>
        </div>
    )
}

export default HeroBanner