import { createContext, Dispatch, SetStateAction } from "react";

export const isModalOpenedContext = createContext<{
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
} | null>(null);
