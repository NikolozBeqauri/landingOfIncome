import styles from './CommentItem.module.scss'
import Image from 'next/image';

interface Props {
    rating: string;
    comment: string;
    name: string;
    jobTitle: string;
}

const CommentItem = ({ rating, comment, name, jobTitle }: Props) => {
    return (
        <div className={styles.itemWrapper}>
            <Image
                src="/user.png"
                alt="user image"
                width={160}
                height={160}
                className={styles.userImage}
            />
            <div className={styles.textWrapper}>
                <div className={styles.texts}>
                    <h3>{rating} rating</h3>
                    <p>{comment}</p>
                </div>
                <div className={styles.personInfo}>
                    <h3>{name}</h3>
                    <p>{jobTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentItem;
