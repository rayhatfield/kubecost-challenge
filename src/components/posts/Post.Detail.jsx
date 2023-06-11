import { Comments } from "./Comments";
import { PostCard } from "./Post.Card";
import styles from "./Post.Detail.module.css";

export function PostDetail({ post }) {
  return !post ? null : (
    <div className={styles.container}>
      <PostCard post={post} />
      <Comments comments={post?.comments} />
    </div>
  );
}
