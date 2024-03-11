import React, { useContext } from "react";
import { IsModalOpenedContext } from "../../shared/context/IsModalOpenedContext";
import { ModalRoot } from "@vkontakte/vkui";

type TModalProps = {
  children: React.ReactElement;
};

export function Modal({ children }: TModalProps) {
  const { modal } = useContext(IsModalOpenedContext)!;

  return <ModalRoot activeModal={modal}>{children}</ModalRoot>;
}
