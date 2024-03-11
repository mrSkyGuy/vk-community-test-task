import { createContext, Dispatch, SetStateAction } from "react";

export const IsModalOpenedContext = createContext<{
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
} | null>(null);
