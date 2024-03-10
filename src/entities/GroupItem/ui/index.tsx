import { useContext } from "react";
import { Title, HorizontalCell } from "@vkontakte/vkui";
import { Icon16Users2Outline, Icon16LockOutline, Icon16UnlockOutline } from "@vkontakte/icons";
import { ActivePanelContext } from "../../../shared/context/ActivePanelСontext";
import { TGroup } from "../../../shared/types";
import { Avatar } from "../../../shared/ui/Avatar/ui";

type TGroupItemProps = {
  info: TGroup;
};

export function GroupItem({ info }: TGroupItemProps) {
  const { setActivePanel } = useContext(ActivePanelContext)!;

  return (
    <HorizontalCell
      header={
        <Title
          level="3"
          style={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "center" }}
        >
          {info.closed ? <Icon16LockOutline /> : <Icon16UnlockOutline />} {info.name}
        </Title>
      }
      subtitle={
        <div
          style={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "center" }}
        >
          <Icon16Users2Outline /> {info.members_count}
        </div>
      }
      onClick={() => setActivePanel(`group--${info.id}`)}
    >
      <Avatar color={info.avatar_color} />
    </HorizontalCell>
  );
}
