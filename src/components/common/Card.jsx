import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./Card.module.css";

const Linked = ({ link, ...props }) => <Link to={link} {...props} />;

export function Card({ className, ...props }) {
  const Cmp = props.link ? Linked : "div";
  return <Cmp className={clsx(styles.container, className)} {...props} />;
}
