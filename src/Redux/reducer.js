import {SET_CARD_DATA} from "./constant"

export const reducerData=(data=[],action)=>{
    switch(action.type){
        case SET_CARD_DATA:
            return [...action.data]
        default:
            return data
    }
    
}