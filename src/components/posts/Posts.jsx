import styles from "./Posts.module.css";

import { getPosts } from "@src/api/posts";
import { useLoaderData } from "react-router-dom";
import { PostCard } from "./Post.Card";
import { CardList } from "../common/CardList";

export async function loader() {
  return getPosts();
}

function Empty() {
  return <div>No posts</div>;
}

export function Posts({ title = "Posts" }) {
  const { data: posts } = useLoaderData();
  return !posts?.length ? (
    <Empty />
  ) : (
    <CardList title={title}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} summary />
      ))}
    </CardList>
  );
}
