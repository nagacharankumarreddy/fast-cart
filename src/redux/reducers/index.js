import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})