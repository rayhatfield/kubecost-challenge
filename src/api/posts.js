import { request } from "../lib/request";

import { ENV } from "../lib/env";

const { API_BASE_URL } = ENV;

console.log({ API_BASE_URL });

const POSTS_URL = `${API_BASE_URL}/posts`;
const POST_URL = (id) => `${API_BASE_URL}/posts/${id}`;
const COMMENTS_URL = (id) => `${POST_URL(id)}/comments`;

export async function getPosts({ userId } = {}) {
  const res = await request(POSTS_URL);
  return !userId
    ? res
    : { ...res, data: res.data.filter((p) => p.userId == userId) };
}

export async function getPost(id, { includeComments } = {}) {
  const post = request(POST_URL(id));
  return !includeComments
    ? post
    : Promise.all([post, getComments(id)]).then(
        ([{ data: post }, { data: comments }]) => {
          return { data: { ...post, comments } };
        }
      );
}

export function getComments(postId) {
  return request(COMMENTS_URL(postId));
}
