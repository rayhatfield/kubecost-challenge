import { NavLink } from "react-router-dom";
import { Card } from "../common/Card";
import { Byline } from "../users/Byline";
import styles from "./Post.Card.module.css";
import clsx from "clsx";

export function PostCard({ post }) {
  return !post ? null : (
    <Card>
      <header className={styles.header}>
        <NavLink
          to={`/post/${post.id}`}
          className={({ isActive }) =>
            clsx(styles.detailLink, { [styles.active]: isActive })
          }
        >
          <h2>{post.title}</h2>
        </NavLink>
        <Byline userId={post.userId} />
      </header>
      <p>{post.body}</p>
    </Card>
  );
}
