import { ENV } from "./env.js";

const cache = {};

const inFlightRequests = {};

export async function request(url) {
  if (cache[url] && cache[url].expires > Date.now()) {
    console.log(`returning from cache: ${url}`);
    return cache[url];
  }

  try {
    // don't make multiple requests for the same url
    const req = (inFlightRequests[url] =
      inFlightRequests[url] || fetchJson(url));

    const data = await req;
    cache[url] = {
      expires: Date.now() + ENV.REQUEST_CACHE_MINUTES * 60 * 1000,
      data,
    };
    delete inFlightRequests[url];
    return { data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function fetchJson(url) {
  console.log(`fetching url: ${url}`);
  return fetch(url).then((r) => r.json());
}
