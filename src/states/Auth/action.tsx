import AuthenticationAPI from "../../api/Authentication";

const ActionType = {
  LOGIN: "LOGIN",
};

const createActionLogin = (auth) => {
  return {
    type: ActionType.LOGIN,
    payload: { auth },
  };
};

const ActionLogin = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const response = await AuthenticationAPI.login({ username, password });
      console.log(response);
      if (response.status == 200) {
        dispatch(createActionLogin(response.data.token));
        localStorage.setItem("token", response.data.token);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export { ActionType, ActionLogin, createActionLogin };
