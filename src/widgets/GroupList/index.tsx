import { Panel, PanelHeader, Group, HorizontalScroll, Button, Title } from "@vkontakte/vkui";
import { TGroup } from "../../shared/types";
import { GroupItem } from "../../entities/GroupItem/ui";
import { useContext } from "react";
import { IsModalOpenedContext } from "../../shared/context/IsModalOpenedContext";
import { FiltersContext } from "../../shared/context/FiltersContext";
import { Icon56CancelCircleOutline } from "@vkontakte/icons";
import styles from "./index.module.css";

type TGroupListProps = {
  groups: TGroup[];
  id: string;
};

export function GroupList({ groups, id }: TGroupListProps) {
  const { setModal } = useContext(IsModalOpenedContext)!;
  const { filters } = useContext(FiltersContext)!;

  function checkGroup(group: TGroup): boolean {
    switch (filters.privacyType) {
      case "all":
        break;
      case "private":
        if (!group.closed) {
          return false;
        }
        break;
      case "public":
        if (group.closed) {
          return false;
        }
    }

    if (filters.friends !== null) {
      if (!(filters.friends && group.friends && group.friends.length > 0)) {
        return false;
      }
      if (filters.friends && group.friends?.length === 0) {
        return false;
      }
    }

    if (filters.choseAvatarColors.length > 0) {
      if (!filters.choseAvatarColors.includes(group.avatar_color ?? "without")) {
        return false;
      }
    }

    return true;
  }

  function filteredGroups() {
    const fg = groups.filter((group) => checkGroup(group));
    if (fg.length > 0) {
      return fg.map((group) => <GroupItem key={group.id} info={group} />);
    }
    return (
      <div className={styles.centered + "." + styles.column}>
        <Icon56CancelCircleOutline />
        <Title level="3" className={styles.centered + " " + styles.centering}>
          Ничего не нашлось :( Попробуй изменить фильтры
        </Title>
      </div>
    );
  }

  return (
    <Panel id={id}>
      <PanelHeader
        after={
          <Button
            onClick={() => {
              setModal("filters");
            }}
          >
            Фильтры
          </Button>
        }
      >
        Сообщества
      </PanelHeader>
      <Group>
        <HorizontalScroll
          showArrows
          getScrollToLeft={(i) => i - 250}
          getScrollToRight={(i) => i + 250}
        >
          <div className={styles.groups}>{filteredGroups()}</div>
        </HorizontalScroll>
      </Group>
    </Panel>
  );
}
