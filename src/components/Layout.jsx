import { NavLink, Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import clsx from "clsx";

export function Layout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul role="list">
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  clsx(styles.navLink, styles.home, {
                    [styles.active]: isActive,
                  })
                }
              >
                Posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
