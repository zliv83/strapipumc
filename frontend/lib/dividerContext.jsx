"use client";

import { createContext, useContext, useState } from "react";

const DividerContext = createContext({
  showDivider: false,
  setShowDivider: () => {},
});

export const DividerProvider = ({ children }) => {
  const [showDivider, setShowDivider] = useState(false);

  return (
    <DividerContext.Provider value={{ showDivider, setShowDivider }}>
      {children}
    </DividerContext.Provider>
  );
};

export const useDividerContext = () => useContext(DividerContext);
