import styles from './DownloadSection.module.scss'
import Image from 'next/image';

const DownloadSection = () => {
    return (
        <div className={styles.outSpace}>
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <h2>გადმოიწერე ჩვენი აპლიკაცია</h2>
                    <div className={styles.content}>
                        <div className={styles.contentItem}>
                            <h3>რატომ?</h3>
                            <p>
                                გადმოიწერე ჩვენი აპლიაცია და მართე შენი ფინანსები თვალყური ადევენ შენს
                                შემოსავლებს და გადაიხადე დეკლარაცია უმარტივესად ჩვენს აპლიკაციაში
                            </p>
                            <div className={styles.downloadIcons}>
                                <Image
                                    src="/googlePlay.png"
                                    alt="google Play icon"
                                    width={144}
                                    height={42}
                                    className={styles.googlePlay}
                                />

                                <Image
                                    src="/appleStory.png"
                                    alt="apple story icon"
                                    width={144}
                                    height={42}
                                    className={styles.appleStory}
                                />
                            </div>
                        </div>
                        <Image
                            src="/download.png"
                            alt="phones"
                            width={786}
                            height={600}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection