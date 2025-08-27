export const login = (email, password) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("auth", "true");
    return true;
  }
  return false;
};

export const signup = (email, password) => {
  localStorage.setItem("user", JSON.stringify({ email, password }));
};

export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true" && localStorage.getItem("user") !== null;
};

export const logout = () => {
  localStorage.removeItem("auth");
};
