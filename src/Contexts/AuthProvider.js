import React, { createContext } from "react";
import useFirebases from "../Hooks/useFirebases";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebases();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
