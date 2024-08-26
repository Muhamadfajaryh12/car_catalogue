import { ActionType } from "./action";

const PreloadReducer = (state = true, action) => {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload?.preload;
    default:
      return state;
  }
};

export default PreloadReducer;
