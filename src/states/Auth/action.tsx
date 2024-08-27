import AuthenticationAPI from "../../api/Authentication";
import { AuthSpec } from "../../types/AuthSpec";

const ActionType = {
  LOGIN: "LOGIN",
};

const createActionLogin = (auth: string) => {
  return {
    type: ActionType.LOGIN,
    payload: { auth },
  };
};

const ActionLogin = ({ username, password }: AuthSpec) => {
  return async (dispatch) => {
    try {
      const response = await AuthenticationAPI.login({ username, password });
      if (response.status == 200) {
        dispatch(createActionLogin(response.data.token));
        localStorage.setItem("token", response.data.token);
        return response;
      } else {
        throw {
          message: response.response.data.message,
          status: response.status,
        };
      }
    } catch (error) {
      throw {
        message: error.message,
        status: error.status,
      };
    }
  };
};

export { ActionType, ActionLogin, createActionLogin };
