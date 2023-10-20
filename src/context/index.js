"use client";
import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function Globalstate({ children }) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
