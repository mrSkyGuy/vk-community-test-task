import React, { createContext, Dispatch, SetStateAction } from "react";

export const IsAlertOpenedContext = createContext<{
  alert: React.ReactNode | null;
  setAlert: Dispatch<SetStateAction<React.ReactNode>>;
} | null>(null);
