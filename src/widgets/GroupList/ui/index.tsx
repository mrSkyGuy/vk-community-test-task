import { Panel, PanelHeader, Group, HorizontalScroll } from "@vkontakte/vkui";
import { TGroup } from "../../../shared/types";
import { GroupItem } from "../../../entities/GroupItem/ui";

type TGroupListProps = {
  groups: TGroup[];
  id: string;
};
export function GroupList({ groups, id }: TGroupListProps) {
  return (
    <Panel id={id}>
      <PanelHeader>Сообщества</PanelHeader>
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
