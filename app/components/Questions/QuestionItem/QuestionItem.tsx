'use client'
import { useState } from "react";
import styles from "./QuestionItem.module.scss";
import Image from "next/image";

interface Props {
    mainText: string;
    secondaryText: string;
}

const QuestionItem = ({ mainText, secondaryText }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.questionItem} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.header}>
                <p className={styles.mainText}>{mainText}</p>
                <Image
                    src={isOpen ? "/activeArrow.svg" : "/notActiveArrow.svg"} 
                    alt="Toggle"
                    width={72}
                    height={72}
                    className={`${styles.arrow} ${isOpen ? styles.rotate : ""} ${isOpen ? styles.activeArrow : styles.notActiveArrow}`}
                />
            </div>
            <div className={`${styles.secondaryTextWrapper} ${isOpen ? styles.open : ""}`}>
                <p className={styles.secondaryText}>{secondaryText}</p>
            </div>
        </div>
    );
};

export default QuestionItem;
