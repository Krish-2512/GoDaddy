// import React, { createContext, useContext, useReducer } from 'react'

// const cartStateContext = createContext();
// const cartDispatchContext = createContext();
// export const  CartProvider = ({children}) =>{
// const reducer=(state,action)=>{
//     switch(action.type){
//     case "ADD":
//         return[...state,{id:action.id,img:action.img,name:action.name,qty:action.qty,size:action.size,price:action.price}]

//     case "REMOVE":
//         let newArr=[...state];
//         newArr.splice(action.index,1);
//         return newArr;    
   

//     // case "UPDATE":
//     //     let arr = [...state]
//     //     arr.find((food, index) => {
//     //         if (food.id === action.id) {
//     //             console.log(food.qty, parseInt(action.qty), action.price + food.price)
//     //             arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
//     //         }
//     //         return arr
//     //     })
//     // case "UPDATE": {
//     //     let arr = [...state];
//     //     arr = arr.map((food) => {
//     //       if (food.id === action.id) {
//     //         return {
//     //           ...food,
//     //           qty: parseInt(action.qty) + food.qty,
//     //           price: action.price + food.price
//     //         };
//     //       }
//     //       return food;
//     //     });
//     //     return arr;
//     //   }
      
       
//     // case "UPDATE": {
//     //     console.log("UPDATE action", action);
//     //     console.log("Current state", state);
      
//     //     const { id, qty, price } = action;
//     //     const updatedArr = state.map((food) => {
//     //       if (food.id === id) {
//     //         console.log("Updating item", food);
//     //         return {
//     //           ...food,
//     //           qty: food.qty + parseInt(qty, 10),
//     //           price: food.price + price,
//     //         };
//     //       }
//     //       return food;
//     //     });
      
//     //     console.log("Updated state", updatedArr);
//     //     return updatedArr;
//     //   }
      

//     case "UPDATE": {
//         let arr = [...state];
//         arr = arr.map((food) => {
//           if (food.id === action.id) {
//             return {
//               ...food,
//               qty: food.qty + parseInt(action.qty),
//               price: food.price + action.price
//             };
//           }
//           return food;
//         });
//         return arr;
//       }
      
        

//         // default:console.log('error in reducer')
//         default:
//             console.log("error in reducer");
        

//     }


// }


//     const [state,dispatch] =useReducer(reducer,[]);
//   return (
//     <cartDispatchContext.Provider value={dispatch}>
//         <cartStateContext.Provider value={state}>
//             {children}
//         </cartStateContext.Provider>
//     </cartDispatchContext.Provider>
//   )
// }

// export const useCart =()=> useContext(cartStateContext);
// export const useDispatchCart =()=>useContext(cartDispatchContext);



























//! abov eworks




import React, { createContext, useContext, useReducer } from 'react';

// Create context for state and dispatch
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Reducer function to handle actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          img: action.img,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price
        }
      ];

    case 'REMOVE':
      return state.filter((_, index) => index !== action.index);

    case 'UPDATE': {
      return state.map(food => {
        if (food.id === action.id) {
          return {
            ...food,
            qty: food.qty + parseInt(action.qty, 10),
            price: food.price + action.price
          };
        }
        return food;
      });
    }

    case 'DROP':
      // Clear the cart by returning an empty array
      return [];

    default:
      console.error('Unhandled action type:', action.type);
      return state;
  }
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

// Custom hooks to use the contexts
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
