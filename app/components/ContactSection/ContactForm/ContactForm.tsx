'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
        reset();
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
                <div className={styles.inputGroup}>
                    <label>სახელი</label>
                    <input type="text" {...register("firstName")} />
                </div>
                <div className={styles.inputGroup}>
                    <label>გვარი</label>
                    <input type="text" {...register("lastName")} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.inputGroup}>
                    <label>ელ-ფოსტა</label>
                    <input type="email" {...register("email")} />
                </div>
                <div className={styles.inputGroup}>
                    <label>ტელეფონი</label>
                    <input type="tel" {...register("phone")} />
                </div>
            </div>
            <div className={styles.textareaGroup}>
                <label>შეტყობინება</label>
                <textarea {...register("message")} placeholder="გამოგვიგზავნე უკ...."></textarea>
            </div>
            <button type="submit" className={styles.submit}>
                გაგზავნა
            </button>
        </form>
    );
};

export default ContactForm;
