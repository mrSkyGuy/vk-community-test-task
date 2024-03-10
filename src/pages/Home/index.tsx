// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// Комменты выше нужны, чтобы не было ошибки из-за бага самой библиотеки. Пока не знаю, как можно
// даже с помощью костылей починить

import { useQuery } from "react-query";
import { SplitCol, View } from "@vkontakte/vkui";
import { apiClient } from "../../shared/api";
import { GroupList } from "../../widgets/GroupList/ui";
import { useContext } from "react";
import { ActivePanelContext } from "../../shared/context/ActivePanelСontext";
import { GroupDescription } from "../../widgets/GroupDescription/ui";

export function Home() {
  const { activePanel } = useContext(ActivePanelContext)!;

  const { status, data, error, refetch } = useQuery("group", () => apiClient.get("groups"), {
    retry: 0
  });

  switch (status) {
    case "error":
      return (
        <span onClick={refetch}>
          Error: {error.code}; {error.message}
        </span>
      );
    case "loading":
      return <span>loading</span>;
    case "idle":
      return <span>idle</span>;

    case "success":
      return (
        <SplitCol>
          <View activePanel={activePanel}>
            <GroupList id="group-list" groups={data} />
            {data.map((group) => (
              <GroupDescription id={`group--${group.id}`} key={`group--${group.id}`} info={group} />
            ))}
          </View>
        </SplitCol>
      );
  }
}
