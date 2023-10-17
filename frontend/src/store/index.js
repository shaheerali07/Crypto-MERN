import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";

const store = configureStore({
  reducer: { user },
});

export default store;
