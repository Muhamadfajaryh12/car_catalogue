import { ActionLogin, createActionLogin } from "../Auth/action";

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

const setPreloadAction = (preload: boolean) => {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: { preload },
  };
};

const asyncPreload = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      dispatch(createActionLogin(token));
    } catch (error) {
      dispatch(createActionLogin(null));
    } finally {
      dispatch(setPreloadAction(false));
    }
  };
};

export { ActionType, asyncPreload };
