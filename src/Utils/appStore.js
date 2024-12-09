
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import seachReducer from "./searchSlice"

const appStore = configureStore({
      reducer:{
        cart : CartReducer,
        search : seachReducer
      }
});

export default appStore;