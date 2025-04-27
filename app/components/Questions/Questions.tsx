'use client'
import { useInView } from "react-intersection-observer";
import QuestionItem from './QuestionItem/QuestionItem';
import styles from './Questions.module.scss';

const Questions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const questions = [
    {
      mainText: 'შემიძლია მობილური აპლიკაციის ჩაწერა?',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      mainText: 'შემიძლია მობილური აპლიკაციის ჩაწერა?',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      mainText: 'შემიძლია მობილური აპლიკაციის ჩაწერა?',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      mainText: 'შემიძლია მობილური აპლიკაციის ჩაწერა?',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div id='questions' className={styles.wrapper} ref={ref}>
      <h2 className={`${styles.title} ${inView ? styles.animateTitle : ''}`}>
        ხშირად დასმული კითხვები
      </h2>

      <div className={styles.questions}>
        {questions.map((q, index) => (
          <div
            key={index}
            className={`${styles.questionItem} ${inView ? styles.animateQuestion : ''} ${inView ? (index % 2 === 0 ? styles.fromRight : styles.fromLeft) : ''}`}
            style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
          >
            <QuestionItem mainText={q.mainText} secondaryText={q.secondaryText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
