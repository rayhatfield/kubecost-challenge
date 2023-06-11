import { request } from "../lib/request";

import { ENV } from "../lib/env";

const { API_BASE_URL } = ENV;

const USER_URL = (id) => `${API_BASE_URL}/users/${id}`;

export async function getUser(id) {
  if (!id) return null;
  return request(USER_URL(id));
}
