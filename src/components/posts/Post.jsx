import { getPost } from "@src/api/posts";

import { useLoaderData } from "react-router-dom";
import { PostDetail } from "./Post.Detail";

export async function loader({ params }) {
  return getPost(params.postId, { includeComments: true });
}

export function Post(props) {
  const { data } = useLoaderData();
  return <PostDetail post={data} {...props} />;
}
