

import { SET_AUTH, LOGOUT } from "../action/auth"
export const initialState = {
    isLoggeIn: false,
    jwt:null,

}

export const authReducer =(state,action)=>{
    switch (action.type) {
        case SET_AUTH:{
            const {jkt} = action.payload
            return {
                isLoggeIn: true,
                jkt 
            }            
        }
        case LOGOUT:{
            return {
                isLoggeIn: false,
                jwt: null,
            };
        }
    
        default:
            return state
    }
}