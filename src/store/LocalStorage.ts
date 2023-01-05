export const tokenStore = {
  get: () => {
    return localStorage.getItem("token");
  },
  set: (token: string) => {
    localStorage.setItem("token", token);
  },
};
export const loginStore = {
  get: () => {
    return localStorage.getItem("login");
  },
  set: (login: {
    email: string;
    password: string;
    scope: string;
    token: string;
  }) => {
    localStorage.setItem("email", login.email);
    localStorage.setItem("password", login.password);
    localStorage.setItem("scope", login.scope);
    localStorage.setItem("token", login.token);
  },
};
