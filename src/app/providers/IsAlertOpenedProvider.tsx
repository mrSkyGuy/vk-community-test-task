import { useState } from "react";
import { IsAlertOpenedContext } from "../../shared/context/IsAlertOpenedContext";

type TIsAlertOpenedProviderProps = {
  children: React.ReactNode;
};

export function IsAlertOpenedProvider({ children }: TIsAlertOpenedProviderProps) {
  const [alert, setAlert] = useState<null | React.ReactNode>(null);

  return (
    <IsAlertOpenedContext.Provider value={{ alert, setAlert }}>
      {children}
    </IsAlertOpenedContext.Provider>
  );
}
