'use client';

import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <div className={styles.row}>
        <div
          className={`${styles.inputGroup} ${inView ? styles.animate : ''}`}
          style={inView ? { animationDelay: '0.6s' } : undefined}
        >
          <label>სახელი</label>
          <input type="text" {...register('firstName')} />
        </div>
        <div
          className={`${styles.inputGroup} ${inView ? styles.animate : ''}`}
          style={inView ? { animationDelay: '1s' } : undefined}
        >
          <label>გვარი</label>
          <input type="text" {...register('lastName')} />
        </div>
      </div>

      <div className={styles.row}>
        <div
          className={`${styles.inputGroup} ${inView ? styles.animate : ''}`}
          style={inView ? { animationDelay: '1.4s' } : undefined}
        >
          <label>ელ-ფოსტა</label>
          <input type="email" {...register('email')} />
        </div>
        <div
          className={`${styles.inputGroup} ${inView ? styles.animate : ''}`}
          style={inView ? { animationDelay: '1.8s' } : undefined}
        >
          <label>ტელეფონი</label>
          <input type="tel" {...register('phone')} />
        </div>
      </div>

      <div
        className={`${styles.textareaGroup} ${inView ? styles.animate : ''}`}
        style={inView ? { animationDelay: '2.2s' } : undefined}
      >
        <label>შეტყობინება</label>
        <textarea {...register('message')} placeholder="გამოგვიგზავნე უკ...."></textarea>
      </div>

      <button
        type="submit"
        className={`${styles.submit} ${inView ? styles.animate : ''}`}
        style={inView ? { animationDelay: '2.6s' } : undefined}
      >
        გაგზავნა
      </button>
    </form>
  );
};

export default ContactForm;
