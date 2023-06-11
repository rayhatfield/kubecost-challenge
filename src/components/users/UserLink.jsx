import { Link } from "react-router-dom";
import { DisplayName } from "./DisplayName";

import styles from "./UserLink.module.css";

export function UserLink({ userId }) {
  return (
    <Link to={`/user/${userId}`}>
      <DisplayName
        as="address"
        userId={userId}
        className={styles.displayName}
      />
    </Link>
  );
}
