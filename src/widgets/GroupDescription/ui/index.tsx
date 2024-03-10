import { useContext } from "react";
import { Group, Panel, PanelHeader, PanelHeaderBack, SimpleCell, Title } from "@vkontakte/vkui";
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
            <Title key={friend.first_name + friend.last_name} Component="label">
              {friend.first_name} {friend.last_name}
            </Title>
          ))
        ) : (
          <SimpleCell Component="label">Здесь нет твоих друзей :(</SimpleCell>
        )}
      </Group>
    </Panel>
  );
}
