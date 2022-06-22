import axios from "axios";

const API_URL = process.env.REACT_APP_SPRING_SERVER + "/api/auth/";

const register = (username, userid, email, password, role) => {
  return axios.post(API_URL + "signup", {
    username,
    userid,
    email,
    password,
    role
  });
};

const login = (userid, password) => {
  return axios
    .post(API_URL + "signin", { userid, password})
    .then((response) => {
      if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  sessionStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
