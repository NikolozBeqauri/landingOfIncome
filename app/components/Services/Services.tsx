'use client';

import styles from './Services.module.scss';
import ServiceItem from './ServiceItem/ServiceItem';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <section id="services" ref={ref} className={styles.serviceWrapper}>
      <div className={styles.serviceTitles}>
        <h2 className={inView ? styles.animate : ''}>ჩვენი სერვისები</h2>
        <p className={inView ? styles.animateDelay : ''}>
          გაიგე თუ რას გთავაზობთ ჩვენ
        </p>
      </div>

      <ServiceItem
        title="თვალი ადევნე შემოსავლებს"
        paragraph="შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა."
        imageName="serviceIncome"
      />
      <ServiceItem
        title="დაამატე ბიზნეს ანგარიშები"
        paragraph="შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა."
        imageName="serviceAccounts"
        rowReverse
      />
      <ServiceItem
        title="გადაიხადე დეკლარაცია"
        paragraph="შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა."
        imageName="serviceDeclaration"
      />
    </section>
  );
};

export default Services;
