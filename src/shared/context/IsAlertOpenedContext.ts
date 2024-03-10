import React, { createContext, Dispatch, SetStateAction } from "react";

export const isAlertOpenedContext = createContext<{
  alert: React.ReactNode | null;
  setAlert: Dispatch<SetStateAction<React.ReactNode>>;
} | null>(null);
