import styles from "./BankSlider.module.scss";
import Image from "next/image";

const BankSlider = () => {
    const banks = [
        { src: "/BOG.png", name: "საქართველოს ბანკი" },
        { src: "/TBC.png", name: "TBC ბანკი" },
        { src: "/liberty.png", name: "LIBERTY ბანკი" },
        { src: "/BOG.png", name: "საქართველოს ბანკი" },
        { src: "/TBC.png", name: "TBC ბანკი" },
        { src: "/liberty.png", name: "LIBERTY ბანკი" },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.bankCardsWrapper}>
                {banks.concat(banks).map((bank, index) => (
                    <div key={index} className={styles.bankCardItem}>
                        <Image
                            src={bank.src}
                            alt={bank.name}
                            width={62}
                            height={62}
                            className={styles.icon}
                        />
                        <p>{bank.name}</p>
                    </div>
                ))}
            </div>
            <div className={styles.bankCardsWrapper}>
                {banks.concat(banks).map((bank, index) => (
                    <div key={index} className={styles.bankCardItem}>
                        <Image
                            src={bank.src}
                            alt={bank.name}
                            width={62}
                            height={62}
                            className={styles.icon}
                        />
                        <p>{bank.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BankSlider;
