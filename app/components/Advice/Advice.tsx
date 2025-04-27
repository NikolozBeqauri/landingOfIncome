'use client';
import { useInView } from 'react-intersection-observer';
import styles from './Advice.module.scss';
import Image from 'next/image';

const Advice = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} ref={ref}>
        <div className={styles.headerTexts}>
          <h2 className={`${styles.animate} ${inView ? styles.animateIn : ''}`}>
            გადმოიწერე ჩვენი აპლიკაცია
          </h2>
          <p className={`${styles.animate} ${inView ? styles.animateIn : ''}`}>
            შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა.
          </p>
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
  );
};

export default Advice;
