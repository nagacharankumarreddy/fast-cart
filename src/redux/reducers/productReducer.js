import { actionTypes } from "../constants/action-types";
const initState={
    products:[]
}
export const productReducer=(state=initState,action)=>{
switch (action.type) {
    case actionTypes.SET_PRODUCTS:
            return {...state,products:action.payload};

    default:
        return state;
        
}
}
export const selectedProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
                return {...state,...payload};
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
            
    }

}