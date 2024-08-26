import axios from "axios";

const AuthenticationAPI = (() => {
  const BASE_URL = "http://localhost:8080/api/user";

  const login = async ({ username, password }) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/login`,
        {
          username,
          password,
        }
      );

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const register = async ({ username, password }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        username,
        password,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    register,
  };
})();

export default AuthenticationAPI;
