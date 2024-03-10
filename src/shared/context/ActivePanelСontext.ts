import { createContext, Dispatch, SetStateAction } from "react";

export const ActivePanelContext = createContext<{
  activePanel: string;
  setActivePanel: Dispatch<SetStateAction<string>>;
} | null>(null);
