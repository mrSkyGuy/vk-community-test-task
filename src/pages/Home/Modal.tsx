import React, { useContext } from "react";
import { isModalOpenedContext } from "../../shared/context/IsModalOpenedContext";
import { ModalRoot } from "@vkontakte/vkui";

type TModalProps = {
  children: React.ReactElement;
};

export function Modal({ children }: TModalProps) {
  const { modal } = useContext(isModalOpenedContext)!;

  return <ModalRoot activeModal={modal}>{children}</ModalRoot>;
}
