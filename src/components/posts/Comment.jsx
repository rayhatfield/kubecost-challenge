import { Card } from "../common/Card";
import styles from "./Comment.module.css";

export function Comment({ comment }) {
  return (
    <Card className="comment">
      <p>{comment.body}</p>
      <Author comment={comment} />
    </Card>
  );
}

function Author({ comment }) {
  return !comment?.email ? null : (
    <address className={styles.author}>
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
    </address>
  );
}
