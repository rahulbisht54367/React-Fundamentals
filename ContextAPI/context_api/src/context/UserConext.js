import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const user = { name: "John Doe", id: 1 };
  const user_secondary = { name: "Johsdasn Doe 2", id: 2 }
  const [newUser,setNewUser]= useState("null")

  return (
    <UserContext.Provider value={{user,user_secondary,newUser,setNewUser}} >
      {children}
    </UserContext.Provider>
  );
}


export default UserProvider;