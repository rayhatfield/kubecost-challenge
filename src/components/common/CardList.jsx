import React from "react";
import clsx from "clsx";

import styles from "./CardList.module.css";

export function CardList({ title, ...props }) {
  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <List {...props} />
    </div>
  );
}

function List({ children, className, ...props }) {
  return (
    <ul role="list" className={clsx(styles.list, className)} {...props}>
      {React.Children.map(children, (child) => (
        <li key={child.key}>{child}</li>
      ))}
    </ul>
  );
}
