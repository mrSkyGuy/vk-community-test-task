import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
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
        {groups.map((group) => (
          <GroupItem key={group.id} info={group} />
        ))}
      </Group>
    </Panel>
  );
}
