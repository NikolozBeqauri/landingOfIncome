import styles from './Advice.module.scss'
import Image from 'next/image';

const Advice = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerTexts}>
                    <h2>გადმოიწერე ჩვენი აპლიკაცია</h2>
                    <p>შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა.</p>
                    <Image
                        src="/plane.png"
                        alt="plane"
                        width={278}
                        height={118}
                        className={styles.plane}
                    />
                </div>
            </div>
            <Image
                src="/advice.png"
                alt="phones"
                width={1440}
                height={700}
                className={styles.advice}
            />
        </div>
    )
}

export default Advice