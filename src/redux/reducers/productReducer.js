import { actionTypes } from "../constants/action-types";
const initState={
    products:[]
}
export const productReducer=(state=initState,action)=>{
switch (action.type) {
    case actionTypes.SET_PRODUCTS:
            return {...state,products:action.payload};
        break;

    default:
        return state;
        break;
}
}