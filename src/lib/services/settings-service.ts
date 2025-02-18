export const getSettings = (): AppSettings => {
  return {
    apiUrl: import.meta.env.VITE_API_URL,
    login: import.meta.env.VITE_LOGIN,
    password: import.meta.env.VITE_PASSWORD,
  };
};
