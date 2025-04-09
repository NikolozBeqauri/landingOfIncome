"use client";

import styles from './ReusableButton.module.scss';

interface Props {
    title: string;
    onClick?: () => void;
    paddingHorizontal?: number;
    paddingVertical?: number;
    buttonColor?: 'grayButton' | 'blueButton';
    borderRadius?: number;
}

const ReusableButton = ({ 
        title, 
        onClick, 
        paddingHorizontal = 12, 
        paddingVertical, 
        buttonColor = 'blueButton', 
        borderRadius = 12 
    }: Props) => {
    return (
        <div 
            className={`${styles.wrapper} ${styles[buttonColor]}`}
            onClick={onClick}
            style={{
                padding: paddingVertical !== undefined 
                ? `${paddingVertical}px ${paddingHorizontal}px` 
                : `0px ${paddingHorizontal}px`,
            borderRadius: `${borderRadius}px`,
            }}
        >
            {title}
        </div>
    );
}

export default ReusableButton;
