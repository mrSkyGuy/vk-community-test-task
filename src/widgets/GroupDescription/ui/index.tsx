import { useContext } from "react";
import { Group, Panel, PanelHeader, PanelHeaderBack, Text } from "@vkontakte/vkui";
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
      <Group style={{ padding: "18px" }}>
        {info.friends?.length ? (
          info.friends!.map((friend) => (
            <Text key={friend.first_name + friend.last_name} Component="label">
              {friend.first_name} {friend.last_name}
            </Text>
          ))
        ) : (
          <Text>Здесь нет твоих друзей :(</Text>
        )}
      </Group>
    </Panel>
  );
}
