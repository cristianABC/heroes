import { types } from "../types/types";
/* 
const state = {
    name= 'Cristian',
    logged: true
} */


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
            break;
        case types.logout:
            return {
                logged: false
            }
            break;

        default:
            return state;
    }
}