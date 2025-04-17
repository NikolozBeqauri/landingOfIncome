import styles from './ServiceItem.module.scss'
import Image from 'next/image';

interface Props {
    title: string;
    paragraph: string;
    imageName: string;
    rowReverse?: boolean;
}

const ServiceItem = (props: Props) => {
    return (
        <div
            className={`${styles.wrapper} ${props.rowReverse ? styles.rowReverse : ''}`}
        >
            <Image
                src={`/${props.imageName}.png`}
                alt="service image"
                width={586}
                height={484}
                className={styles.image}
            />
            <div className={styles.titles}>
                <h3>{props.title}</h3>
                <p>
                    {props.paragraph}
                </p>
            </div>
        </div>
    )
}

export default ServiceItem