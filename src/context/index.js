"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function Globalstate({ children }) {
  const [showNavModel, setShowNavModel] = useState(false);
  return (
    <GlobalContext.Provider value={{ showNavModel, setShowNavModel }}>
      {children}
    </GlobalContext.Provider>
  );
}
