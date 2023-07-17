import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext= createContext();

const reducer =(state,action)=>{
switch(action.type){
    case "ADD":
        return [...state,{id:action.id,name: action.name,qty: action.qty,size: action.size,img: action.img,price: action.price}];
    case "REMOVE":
        let Arr= [...state]
         let newArr=[];
        for (let i = 0; i< Arr.length; i++) {
            if (i !== action.index) {
              newArr.push(Arr[i]);
            }
        }
        return newArr;
    case "UPDATE":
        let arr=[...state];
        arr.find((food,index)=>{
            if(food.id === action.id){
                arr[index]={...food,qty: parseInt(action.qty)+food.qty,price: action.price+food.price};
            }
            return arr;
        })
        return arr;
    case "DROP":
        let empArray=[];
        return empArray;
    default :
        console.log("Error in reducer");
}
}
export const ContextProvider = ({children}) =>{

    const [state,dispatch]=useReducer(reducer,[]);

    return(
     <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
     </CartDispatchContext.Provider>
    );
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);
export default ContextProvider;