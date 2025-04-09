import styles from './Services.module.scss'
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    return (
        <section id='services' className={styles.serviceWrapper}>
            <div className={styles.serviceTitles}>
                <h2>ჩვენი სერვისერბი</h2>
                <p>გაიგე თუ რას გთავაზობთ ჩვენ</p>
            </div>

            <ServiceItem title={'თვალი ადევნე შემოსავლებს'} paragraph={'შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა.'} imageName={'serviceIncome'}/>
            <ServiceItem title={'დაამატე ბიზნეს ანგარიშები'} rowReverse paragraph={'შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა.'} imageName={'serviceAccounts'}/>
            <ServiceItem title={'გადაიხადე დეკლარაცია'} paragraph={'შემოუერთდი ჩვენს აპლიკაციას, გადმოიწერე ის შენს ტელეფონში და მოიგვარე დეკლარაციასთან დაკავშირებული ყველა პრობლემა.'} imageName={'serviceDeclaration'}/>
        </section>
    )
}

export default Services