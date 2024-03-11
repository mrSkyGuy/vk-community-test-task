import { useState } from "react";
import { FiltersContext, TFiltersContext } from "../../shared/context/FiltersContext";

type TFiltersProviderProps = {
  children: React.ReactNode;
};

export function FiltersProvider({ children }: TFiltersProviderProps) {
  const [filters, setFilters] = useState<TFiltersContext>({
    friends: null,
    privacyType: "all",
    choseAvatarColors: []
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
}
