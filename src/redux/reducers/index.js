import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const rootReducer=combineReducers({
    allProducts:productReducer
})