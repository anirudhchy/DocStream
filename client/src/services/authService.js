import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/auth";

const signup = (name, email, password) => {
    return axios
      .post(API_URL + "/register", {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data.user.name;   
      });
  };

  const login = (email, password) => {
    return axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data.user.name;   
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user")).user.name;
  };

  const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
  };
  
  export default authService;
  