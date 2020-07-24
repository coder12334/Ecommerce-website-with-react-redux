
import {REMOVE_ITEM_FROM_WHISTLIST,ADD_TO_WHISTLIST, ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
export const removeToWhistlist = (id) =>{
    return{
        type : REMOVE_ITEM_FROM_WHISTLIST,
        id
    }
}

export const addToWhistlist= (id)=>{
    return{
        type: ADD_TO_WHISTLIST,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
