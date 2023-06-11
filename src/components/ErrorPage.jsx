import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page" className={styles.container}>
      <div>
        <h1>oh no.</h1>
        <p>This is embarrassing.</p>
      </div>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <Link to="/">← Let’s go home.</Link>
      </p>
    </div>
  );
}
