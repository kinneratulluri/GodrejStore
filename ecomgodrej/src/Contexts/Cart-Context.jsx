import React, {useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "../Reducers/CartReducer";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  
  const initialState = {
    loading: false,
    cart:[],
    total: 0,
    quantity: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  


  const addItem = (item) => {
    dispatch({type:'ADD_ITEM',payload:{item,...state}});
  };
 const remove=(id)=>{
  dispatch({type:'REMOVE',payload:id});
 }
 const toggleAmount = (id, type) => {
  dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
}

  const clearcart = () => {
    dispatch({ type: "CLEAR_CART" ,payload:{...state}});
  };

  useEffect(()=>{
  dispatch({type:'GET_TOTALS'})
  },[state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearcart,
        addItem,
        remove,
       toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCart = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
