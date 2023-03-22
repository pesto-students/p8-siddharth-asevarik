import {createStore} from "redux";
const lightReducer = (state=true,action)=>{
    switch(action.type){
        case "TOGGLE":
            return !state
        default:
            return true
        }
}
export const reduxStore = createStore(lightReducer)