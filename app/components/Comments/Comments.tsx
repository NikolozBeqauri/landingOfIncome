import CommentItem from './CommentItem/CommentItem'
import styles from './Comments.module.scss'

const commentsData = [
  {
    rating: "5.0",
    comment: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    name: "Elisa Grant",
    jobTitle: "Legacy Solutions Engineer",
  },
  {
    rating: "4.5",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "David Miller",
    jobTitle: "Software Developer",
  },
  {
    rating: "4.8",
    comment: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sophia Brown",
    jobTitle: "Marketing Specialist",
  },
  {
    rating: "5.0",
    comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",
    name: "James Wilson",
    jobTitle: "Project Manager",
  },
  {
    rating: "4.9",
    comment: "Excepteur sint occaecat cupidatat non proident.",
    name: "Emma Davis",
    jobTitle: "UX Designer",
  },
];

const Comments = () => {
  return (
    <section id='comments' className={styles.wrapper}>
      <h2>ჩვენი მომხმარებლები</h2>
      <div className={styles.commentsWrapper}>
        <div className={styles.comments}>
          {commentsData.concat(commentsData).map((comment, index) => (
            <CommentItem
              key={index}
              rating={comment.rating}
              comment={comment.comment}
              name={comment.name}
              jobTitle={comment.jobTitle}
            />
          ))}
        </div>
        <div className={styles.comments}>
          {commentsData.concat(commentsData).map((comment, index) => (
            <CommentItem
              key={index}
              rating={comment.rating}
              comment={comment.comment}
              name={comment.name}
              jobTitle={comment.jobTitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comments;
