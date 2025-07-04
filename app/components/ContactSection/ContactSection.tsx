'use client'
import { useInView } from "react-intersection-observer";
import ContactForm from './ContactForm/ContactForm';
import styles from './ContactSection.module.scss';
import Image from 'next/image';

const ContactSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const contacts = [
        { name: "Phone", value: "+995 555 555 555", img: "/whitePhone.svg", alt: "whitePhone logo" },
        { name: "Email", value: "Avse@gmail.com", img: "/whiteEmail.svg", alt: "whiteEmail logo" },
        { name: "Location", value: "Tbilisi, Georgia", img: "/whiteLocation.svg", alt: "whiteLocation logo" },
    ];

    const socialMedia = [
        { name: "Twitter", url: "https://twitter.com", img: "/blackTwitter.svg", width: 30, height: 30 },
        { name: "Instagram", url: "https://instagram.com", img: "/blackInstagram.svg", width: 30, height: 30 },
        { name: "Discord", url: "https://discord.com", img: "/blackDiscord.svg", width: 30, height: 30 },
    ];

    return (
        <section id='contacts' className={styles.wrapper} ref={ref}>
            <h2 className={`${styles.title} ${inView ? styles.animateTitle : ''}`}>
                კონტაქტი
            </h2>
            <div className={styles.contentWrapper}>
                <div className={styles.leftContent}>
                    <h3 className={`${styles.leftContentTitle} ${inView ? styles.animateLeftContentTitle : ''}`}>
                        საკონტაქტო ინფორმაცია
                    </h3>

                    <Image
                        src={"/contactDots.png"}
                        alt={"dots"}
                        width={180}
                        height={180}
                        className={styles.contactDots}
                    />

                    <div className={styles.contacts}>
                        {contacts.map((contact, index) => (
                            <div
                                key={contact.name}
                                className={`${styles.contactsItem} ${inView ? styles.animateContactsItem : ''}`}
                                style={{ animationDelay: `${0.4 * index}s`, animationFillMode: 'forwards' }}
                            >
                                <Image
                                    src={contact.img}
                                    alt={contact.alt}
                                    width={24}
                                    height={24}
                                    className={styles.contactImage}
                                />
                                <p className={styles.contactsText}>{contact.value}</p>
                            </div>
                        ))}
                    </div>

                    <nav className={styles.contactSocialMedia} aria-label="Social media links">
                        {socialMedia.map((social, index) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit our ${social.name} page`}
                                title={`Visit our ${social.name} page`}
                                className={`${inView ? styles.animateSocial : ''}`}
                                style={{ animationDelay: `${0.3 * index}s`, animationFillMode: 'forwards' }}
                            >
                                <Image
                                    src={social.img}
                                    alt={`${social.name} logo`}
                                    width={social.width}
                                    height={social.height}
                                />
                            </a>
                        ))}
                    </nav>
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;
