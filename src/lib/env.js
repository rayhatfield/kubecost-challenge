// re-export env variables from Vite for convenience; strip the VITE_ prefix
export const ENV = Object.fromEntries(
  Object.entries(import.meta.env).map(([key, value]) => [
    key.replace(/^VITE_/, ""),
    value,
  ])
);
