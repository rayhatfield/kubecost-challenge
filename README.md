# kubecost-challenge
This is a demo app for the kubecost interview code challenge.

It's built with [React](https://react.dev/) and [React Router](https://reactrouter.com/) and bundled with [Vite](https://vitejs.dev/).

## Preview
A live version is deployed at https://kube.rayhatfield.dev/ via [Vercel](https://vercel.com/).

## Local Development
To run it locally:

1. clone the repo
2. `npm install`
3. `npm run dev` or `npm run preview`

The app fetches a list of posts from [a mock data endpoint](https://jsonplaceholder.typicode.com/posts).

Clicking into a particular post will display a detail view with comments.

Clicking an author's name will display a list of posts by that author.

<img width="612" alt="image" src="https://github.com/rayhatfield/kubecost-challenge/assets/1164081/00d5f2ee-f890-439d-b392-5efe6f3e56e8">

## Known Issues

- Reloading a subpath on the live site triggers a 404 due to a missing directive to always serve index.html

