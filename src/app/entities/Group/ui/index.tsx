import { TGroup } from "../../../../shared/types";

type TGroupProps = {
  info: TGroup;
};

export function Group({ info }: TGroupProps) {
  return <div>{info.name}</div>;
}
