import React, { useContext } from "react";
import { User } from "../models/Auth";
import { useGetUser } from "./Auth";

const AuthContext = React.createContext<User | null>(null);

/**
 * Returns auth context
 * @component useAuth
 */
export const useAuth = () => {
  return useContext(AuthContext);
};

/**
 * @component AuthProvider
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let user = useGetUser();
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
