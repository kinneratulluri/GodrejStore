import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { filterreducer } from "../Reducers/FilterReducer";
import { WomenAssets } from "../Components/WomenItems";
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const [searchTerm, setsearchTerm] = useState("search like jeans");
  const initialCart = {
     originalcart:WomenAssets,
     tempcart:[],
  }
  const [state, dispatch] = useReducer(filterreducer, initialCart);

  
  useEffect(() => {
    dispatch({ type: "FILTER", payload:{searchTerm}});
  },[searchTerm]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        searchTerm,
        setsearchTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
