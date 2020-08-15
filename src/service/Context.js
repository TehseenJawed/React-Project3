import React, {useReducer, createContext} from 'react';
import TransReducer from './transReducer';
const Cart_Items=[];

export const TransactionContext = createContext(Cart_Items);
export const TransactionProvider =({children})=>{
    let [state, dispatch] = useReducer(TransReducer, Cart_Items);
    
    function Add_to_cart(item){
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                img: item.img,
                name: item.name,
                price: item.price,
                id: Math.floor(Math.random()*100000)
            },
        })
    }
    function Delete_from_cart(transId){
        dispatch({
            type: "DELETE_TRANSACTION",
            id: transId
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            Add_to_cart: Add_to_cart,
            Delete_from_cart
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
