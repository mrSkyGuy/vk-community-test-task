import { useState } from "react";
import { IsModalOpenedContext } from "../../shared/context/IsModalOpenedContext";

type TIsModalOpenedProviderProps = {
  children: React.ReactNode;
};

export function IsModalOpenedProvider({ children }: TIsModalOpenedProviderProps) {
  const [modal, setModal] = useState<null | string>(null);

  return (
    <IsModalOpenedContext.Provider value={{ modal, setModal }}>
      {children}
    </IsModalOpenedContext.Provider>
  );
}
