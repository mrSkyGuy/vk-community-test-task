import { useContext } from "react";
import { SimpleCell } from "@vkontakte/vkui";
import { ActivePanelContext } from "../../../shared/context/ActivePanelСontext";
import { TGroup } from "../../../shared/types";
import { Avatar } from "../../../shared/ui/Avatar/ui";
import styles from "./index.module.scss";

type TGroupItemProps = {
  info: TGroup;
};

export function GroupItem({ info }: TGroupItemProps) {
  const { setActivePanel } = useContext(ActivePanelContext)!;

  return (
    <SimpleCell
      onClick={() => setActivePanel(`group--${info.id}`)}
      expandable="auto"
      before={<Avatar color={info.avatar_color} />}
      baseClassName={styles.groupItem}
      hoverClassName={styles.hovered}
    >
      {info.name}
    </SimpleCell>
  );
}
