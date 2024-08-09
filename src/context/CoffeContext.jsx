"use client"
import React, { createContext, useEffect, useState } from "react";

export const CoffeContext = createContext(null);

export default function CoffeContextProvider({children}) {

   
const [coffeData,setCoffeData]=useState([])

// useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     setdataUsers(storedUsers);
//     setFilterUsers(storedUsers);
//   }, [setdataUsers,setFilterUsers]);

	return(
		<CoffeContext.Provider value={{coffeData,setCoffeData}}>
			{children}
		</CoffeContext.Provider>
	)
}