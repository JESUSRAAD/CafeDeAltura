"use client"
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({children}) {

   
const [dataUsers,setdataUsers]=useState([])
const [filterUsers,setFilterUsers]=useState([])

useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setdataUsers(storedUsers);
    setFilterUsers(storedUsers);
  }, [setdataUsers,setFilterUsers]);

	return(
		<UserContext.Provider value={{dataUsers,setdataUsers,filterUsers,setFilterUsers}}>
			{children}
		</UserContext.Provider>
	)
}