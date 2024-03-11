import { Panel, PanelHeader, Group, HorizontalScroll, Button, Text } from "@vkontakte/vkui";
import { TGroup } from "../../shared/types";
import { GroupItem } from "../../entities/GroupItem/ui";
import { useContext } from "react";
import { IsModalOpenedContext } from "../../shared/context/IsModalOpenedContext";
import { FiltersContext } from "../../shared/context/FiltersContext";

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
    return <Text style={{ margin: "auto" }}>Ничего не нашлось :( Попробуй изменить Фильтры</Text>;
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
          <div style={{ display: "flex", gap: "50px" }}>{filteredGroups()}</div>
        </HorizontalScroll>
      </Group>
    </Panel>
  );
}
