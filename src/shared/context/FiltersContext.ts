import { createContext, Dispatch, SetStateAction } from "react";

export type TFiltersContext = {
  privacyType: "all" | "public" | "private";
  friends: null | boolean;
  choseAvatarColors: string[];
};

export const FiltersContext = createContext<{
  filters: TFiltersContext;
  setFilters: Dispatch<SetStateAction<TFiltersContext>>;
} | null>(null);
