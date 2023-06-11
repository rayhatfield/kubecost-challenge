import { UserLink } from "./UserLink";

export function Byline(props) {
  return (
    <div>
      <span>by</span> <UserLink {...props} />
    </div>
  );
}
