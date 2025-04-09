import styles from "./Offer.module.scss";
import Image from 'next/image';

const Offer = () => {
  return (
    <div id="offer" className={styles.wrapper}>
      <h2>რას გთავაზობთ?</h2>
      <div className={styles.content}>
        <Image
          src="/offer.png"
          alt="service image"
          width={729}
          height={574}
          className={styles.image}
        />
        <div className={styles.offersWrapper}>
          <div className={styles.offersItem}>
            <p>1</p>
            <div className={styles.offersText}>
              <h3>აკონტროლე ფინანსები</h3>
              <p>შენ შეგიძლია თვალყური ადევნო და გააკონტროლო შენი ფინანსები ჩვენთან</p>
            </div>
          </div>

          <div className={styles.offersItem}>
            <p>2</p>
            <div className={styles.offersText}>
              <h3>ავტომატური დათვლა</h3>
              <p>აპლიკაცია ავტომატურად ითვლის შემოსავლებს</p>
            </div>
          </div>

          <div className={styles.offersItem}>
            <p>3</p>
            <div className={styles.offersText}>
              <h3>გადაიხადე დეკლარაცია</h3>
              <p>იხდი დეკლარაციას სწრაფად და ძალიან უსაფრთხოდ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer