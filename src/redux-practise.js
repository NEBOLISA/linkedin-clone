import allReducers from "./reducers";
import { createStoreHook } from "react-redux";

const store = createStoreHook(allReducers)