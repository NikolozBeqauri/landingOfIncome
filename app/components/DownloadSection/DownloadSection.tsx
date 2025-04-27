'use client'
import styles from './DownloadSection.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const DownloadSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

    return (
        <div className={styles.outSpace} ref={ref}>
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <h2 className={`${styles.opacityHidden} ${inView ? styles.animateH2 : ''}`}>
                        გადმოიწერე ჩვენი აპლიკაცია
                    </h2>
                    <div className={styles.content}>
                        <div className={styles.contentItem}>
                            <h3 className={`${styles.opacityHidden} ${inView ? styles.animateH3 : ''}`}>
                                რატომ?
                            </h3>
                            <p className={`${styles.opacityHidden} ${inView ? styles.animateP : ''}`}>
                                გადმოიწერე ჩვენი აპლიაცია და მართე შენი ფინანსები თვალყური ადევენ შენს
                                შემოსავლებს და გადაიხადე დეკლარაცია უმარტივესად ჩვენს აპლიკაციაში
                            </p>
                            <div className={styles.downloadIcons}>
                                <Image
                                    src="/googlePlay.png"
                                    alt="google Play icon"
                                    width={144}
                                    height={42}
                                    className={`${styles.opacityHidden} ${inView ? styles.animateGoogle : ''}`}
                                />
                                <Image
                                    src="/appleStory.png"
                                    alt="apple story icon"
                                    width={144}
                                    height={42}
                                    className={`${styles.opacityHidden} ${inView ? styles.animateApple : ''}`}
                                />
                            </div>
                        </div>
                        <Image
                            src="/download.png"
                            alt="phones"
                            width={786}
                            height={600}
                            className={`${styles.image} ${styles.opacityHidden} ${inView ? styles.animateImage : ''}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
