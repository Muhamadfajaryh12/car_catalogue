import axios from "axios";
import { AuthSpec } from "../types/AuthSpec";

const AuthenticationAPI = (() => {
  const BASE_URL = "http://localhost:8080/api/user";

  const login = async ({ username, password }: AuthSpec) => {
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
      return error;
    }
  };

  const register = async ({ username, password }: AuthSpec) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        username,
        password,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  return {
    login,
    register,
  };
})();

export default AuthenticationAPI;
