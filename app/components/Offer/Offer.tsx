'use client'
import { useInView } from "react-intersection-observer";
import styles from "./Offer.module.scss";
import Image from 'next/image';

const Offer = () => {
  const { ref: wrapperRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div id="offer" className={styles.wrapper} ref={wrapperRef}>
      <h2 className={`${styles.title} ${inView ? styles.animateTitle : ""}`}>
        რას გთავაზობთ?
      </h2>

      <div className={styles.content}>
        <Image
          src="/offer.png"
          alt="service image"
          width={729}
          height={574}
          className={`${styles.image} ${inView ? styles.animateImage : ""}`}
        />

        <div className={styles.offersWrapper}>
          {[1, 2, 3].map((item, index) => (
            <div
              key={item}
              className={`${styles.offersItem} ${inView ? styles.animateOffer : ""} ${styles[`delay${index + 1}`]}`}
            >
              <p>{item}</p>
              <div className={styles.offersText}>
                {item === 1 && (
                  <>
                    <h3>აკონტროლე ფინანსები</h3>
                    <p>შენ შეგიძლია თვალყური ადევნო და გააკონტროლო შენი ფინანსები ჩვენთან</p>
                  </>
                )}
                {item === 2 && (
                  <>
                    <h3>ავტომატური დათვლა</h3>
                    <p>აპლიკაცია ავტომატურად ითვლის შემოსავლებს</p>
                  </>
                )}
                {item === 3 && (
                  <>
                    <h3>გადაიხადე დეკლარაცია</h3>
                    <p>იხდი დეკლარაციას სწრაფად და ძალიან უსაფრთხოდ</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
