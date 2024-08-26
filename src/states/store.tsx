import AuthenticationReducer from "./Auth/reducer";
import { configureStore } from "@reduxjs/toolkit";
import PreloadReducer from "./Preload/reducer";
const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    preload: PreloadReducer,
  },
});

export default store;
