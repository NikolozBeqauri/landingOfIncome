import styles from './ServiceItem.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface Props {
  title: string;
  paragraph: string;
  imageName: string;
  rowReverse?: boolean;
}

const ServiceItem = (props: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${props.rowReverse ? styles.rowReverse : ''}`}
    >
      <Image
        src={`/${props.imageName}.png`}
        alt="service image"
        width={586}
        height={484}
        className={`${styles.image} ${inView ? styles.imageAnimate : ''}`}
      />
      <div className={styles.titles}>
        <h3 className={`${inView ? styles.titleAnimate : ''}`}>{props.title}</h3>
        <p className={`${inView ? styles.paragraphAnimate : ''}`}>
          {props.paragraph}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
