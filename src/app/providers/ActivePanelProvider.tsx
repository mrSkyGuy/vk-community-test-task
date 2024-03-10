import { useState } from "react";
import { ActivePanelContext } from "../../shared/context/ActivePanelСontext";

type TActivePanelProviderProps = {
  children: React.ReactNode;
};

export function ActivePanelProvider({ children }: TActivePanelProviderProps) {
  const [activePanel, setActivePanel] = useState("group-list");

  return (
    <ActivePanelContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </ActivePanelContext.Provider>
  );
}
