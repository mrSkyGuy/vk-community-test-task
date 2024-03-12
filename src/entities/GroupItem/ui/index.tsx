import { useContext } from "react";
import { Title, HorizontalCell, Caption } from "@vkontakte/vkui";
import { Icon16Users2Outline, Icon16LockOutline, Icon16UnlockOutline } from "@vkontakte/icons";
import { ActivePanelContext } from "../../../shared/context/ActivePanelСontext";
import { IsAlertOpenedContext } from "../../../shared/context/IsAlertOpenedContext";
import { TGroup } from "../../../shared/types";
import { Avatar } from "../../../shared/ui/Avatar";
import { Alert } from "../../../shared/ui/Alert";
import styles from "./index.module.css";

type TGroupItemProps = {
  info: TGroup;
};

export function GroupItem({ info }: TGroupItemProps) {
  const { setActivePanel } = useContext(ActivePanelContext)!;
  const { setAlert } = useContext(IsAlertOpenedContext)!;

  return (
    <HorizontalCell
      header={
        <Title level="3" className={styles.text}>
          {info.closed ? <Icon16LockOutline /> : <Icon16UnlockOutline />} {info.name}
        </Title>
      }
      subtitle={
        <Caption className={styles.text}>
          {info.members_count > 0 && (
            <>
              <Icon16Users2Outline /> {info.members_count}{" "}
              {info.friends?.length && `(${info.friends.length})`}
            </>
          )}
        </Caption>
      }
      onClick={
        !info.closed
          ? () => setActivePanel(`group--${info.id}`)
          : () => setAlert(<Alert onSubmit={() => setActivePanel(`group--${info.id}`)} />)
      }
    >
      <Avatar color={info.avatar_color} />
    </HorizontalCell>
  );
}
