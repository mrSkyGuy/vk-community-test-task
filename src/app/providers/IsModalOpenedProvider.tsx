import { useState } from "react";
import { isModalOpenedContext } from "../../shared/context/IsModalOpenedContext";

type TIsModalOpenedProviderProps = {
  children: React.ReactNode;
};

export function IsModalOpenedProvider({ children }: TIsModalOpenedProviderProps) {
  const [modal, setModal] = useState<null | string>(null);

  return (
    <isModalOpenedContext.Provider value={{ modal, setModal }}>
      {children}
    </isModalOpenedContext.Provider>
  );
}
