import { useState } from "react";
import { isAlertOpenedContext } from "../../shared/context/IsAlertOpenedContext";

type TIsAlertOpenedProviderProps = {
  children: React.ReactNode;
};

export function IsAlertOpenedProvider({ children }: TIsAlertOpenedProviderProps) {
  const [alert, setAlert] = useState<null | React.ReactNode>(null);

  return (
    <isAlertOpenedContext.Provider value={{ alert, setAlert }}>
      {children}
    </isAlertOpenedContext.Provider>
  );
}
