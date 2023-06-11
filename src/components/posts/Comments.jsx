import { CardList } from "@src/components/common/CardList";
import { Comment } from "./Comment";

export function Comments({ comments, ...props }) {
  return (
    <CardList title="Comments" {...props}>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </CardList>
  );
}
