import { Panel, PanelHeader, Group, HorizontalScroll, Button } from "@vkontakte/vkui";
import { TGroup } from "../../shared/types";
import { GroupItem } from "../../entities/GroupItem/ui";
import { useContext } from "react";
import { isModalOpenedContext } from "../../shared/context/IsModalOpenedContext";

type TGroupListProps = {
  groups: TGroup[];
  id: string;
};

export function GroupList({ groups, id }: TGroupListProps) {
  const { setModal } = useContext(isModalOpenedContext)!;

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
          <div style={{ display: "flex", gap: "50px" }}>
            {groups.map((group) => (
              <GroupItem key={group.id} info={group} />
            ))}
          </div>
        </HorizontalScroll>
      </Group>
    </Panel>
  );
}
