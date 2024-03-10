import { useContext } from "react";
import { Group, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { ActivePanelContext } from "../../../shared/context/ActivePanelСontext";
import { TGroup } from "../../../shared/types";

type TGroupDescriptionType = {
  info: TGroup;
  id: string;
};

export function GroupDescription({ info, id }: TGroupDescriptionType) {
  const { setActivePanel } = useContext(ActivePanelContext)!;

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel("group-list")} />}>
        {info.name}
      </PanelHeader>
      <Group>
        {info.friends?.length ? (
          info.friends!.map((friend) => (
            <SimpleCell key={friend.first_name + friend.last_name} Component="label">
              {friend.first_name} {friend.last_name}
            </SimpleCell>
          ))
        ) : (
          <SimpleCell Component="label">Здесь нет твоих друзей :(</SimpleCell>
        )}
      </Group>
    </Panel>
  );
}
