import { useParams } from "react-router-dom";
import { getPosts } from "@src/api/posts";
import { Posts } from "../posts/Posts";
import { DisplayName } from "./DisplayName";

export async function loader({ params: { userId } = {} }) {
  return getPosts({ userId });
}

export function User() {
  let { userId } = useParams();

  return (
    <div>
      <h1>
        <DisplayName userId={userId} />
      </h1>
      <Posts />
    </div>
  );
}
