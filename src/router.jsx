import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./components/ErrorPage";
import { Posts, loader as postsLoader } from "./components/posts/Posts";
import { Post, loader as postLoader } from "./components/posts/Post";
import { User, loader as userLoader } from "./components/users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/posts",
        loader: postsLoader,
        element: <Posts />,
      },
      {
        path: "/post/:postId",
        loader: postLoader,
        element: <Post />,
      },
      {
        path: "/user/:userId",
        loader: userLoader,
        element: <User />,
      },
      {
        index: true,
        element: <Navigate to="/posts" />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
