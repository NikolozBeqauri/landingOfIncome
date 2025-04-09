import ReusableButton from '../../ReusableButton/ReusableButton';
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
            className={styles.wrapper}
            style={props.rowReverse ? { flexDirection: 'row-reverse' } : {}}
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
                <div className={styles.buttons}>
                    <ReusableButton title={'შემოგვიერთდი'} paddingHorizontal={50} paddingVertical={8} />
                    <ReusableButton title={'გაიგე მეტი'} buttonColor='grayButton' paddingHorizontal={68} paddingVertical={8} />
                </div>
            </div>
        </div>
    )
}

export default ServiceItem