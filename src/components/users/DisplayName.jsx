import { useEffect, useState } from "react";
import { getUser } from "@src/api/users";

export function DisplayName({ userId, as: Cmp = "div", ...props }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let unmounted = false;
    getUser(userId).then(({ data }) => {
      if (!unmounted) {
        setUser(data);
      }
    });
    return () => {
      unmounted = true;
    };
  }, [userId]);

  return !user?.name ? null : <Cmp {...props}>{user.name}</Cmp>;
}
