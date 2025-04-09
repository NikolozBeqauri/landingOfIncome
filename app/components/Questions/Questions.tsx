import QuestionItem from './QuestionItem/QuestionItem'
import styles from './Questions.module.scss'


const Questions = () => {
  return (
    <div id='questions' className={styles.wrapper}>
      <h2>ხშირად დასმული კითხვები</h2>
      <div className={styles.questions}>
        <QuestionItem mainText={'შემიძლია მობილური აპლიკაციის ჩაწერა?'} secondaryText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <QuestionItem mainText={'შემიძლია მობილური აპლიკაციის ჩაწერა?'} secondaryText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <QuestionItem mainText={'შემიძლია მობილური აპლიკაციის ჩაწერა?'} secondaryText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <QuestionItem mainText={'შემიძლია მობილური აპლიკაციის ჩაწერა?'} secondaryText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
      </div>
    </div>
  )
}

export default Questions