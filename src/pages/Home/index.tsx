// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// Комменты выше нужны, чтобы не было ошибки из-за бага самой библиотеки. Пока не знаю, как можно
// даже с помощью костылей починить

import { useQuery } from "react-query";
import { SplitCol, View, SplitLayout } from "@vkontakte/vkui";
import { apiClient } from "../../shared/api";
import { GroupList } from "../../widgets/GroupList";
import { useContext } from "react";
import { ActivePanelContext } from "../../shared/context/ActivePanelСontext";
import { GroupDescription } from "../../widgets/GroupDescription";
import { IsAlertOpenedContext } from "../../shared/context/IsAlertOpenedContext";
import { Filters } from "../../features/Filters";
import { Modal } from "./Modal";
import { TGetGroupsResponse } from "../../shared/types";

export function Home() {
  const { activePanel } = useContext(ActivePanelContext)!;
  const { alert } = useContext(IsAlertOpenedContext)!;

  function getColorsWithoutDuplicates(data: TGetGroupsResponse) {
    const colorsWD: string[] = [];
    for (const group of data) {
      if (!colorsWD.includes(group.avatar_color || "without"))
        colorsWD.push(group.avatar_color || "without");
    }
    return colorsWD;
  }

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
        <SplitLayout
          popout={alert}
          modal={
            <Modal>
              <Filters id="filters" availableColors={getColorsWithoutDuplicates(data)} />
            </Modal>
          }
        >
          <SplitCol maxWidth={500} style={{ margin: "auto" }}>
            <View activePanel={activePanel}>
              <GroupList id="group-list" groups={data} />
              {data.map((group) => (
                <GroupDescription
                  id={`group--${group.id}`}
                  key={`group--${group.id}`}
                  info={group}
                />
              ))}
            </View>
          </SplitCol>
        </SplitLayout>
      );
  }
}
