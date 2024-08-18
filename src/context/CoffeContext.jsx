"use client"
import React, { createContext, useEffect, useState } from "react";

export const CoffeContext = createContext(null);

export default function CoffeContextProvider({children}) {
	// const isCarAvailable=false

   const [isCarAvailable,setIsCarAvailable]=useState(false)
   const [coffeData,setCoffeData]=useState([])
   const [coffeUsers,setCoffeUsers]=useState([])
   const [coffeChoiced,setCoffeChoiced]=useState([])
   
   

useEffect(() => {
    const coffeUsers = JSON.parse(localStorage.getItem('users')) || [];
    // const coffeProducts = JSON.parse(localStorage.getItem('productsChoice')) || [];
    setCoffeUsers(coffeUsers);
    // setCoffeChoiced(coffeProducts);
  }, [
	setCoffeUsers,
	// setCoffeChoiced
]);

	return(
		<CoffeContext.Provider value={{coffeData,setCoffeData,coffeUsers,setCoffeUsers,coffeChoiced,setCoffeChoiced,isCarAvailable,setIsCarAvailable}}>
			{children}
		</CoffeContext.Provider>
	)
}