// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// Комменты выше нужны, чтобы не было ошибки из-за бага самой библиотеки. Пока не знаю, как можно
// даже с помощью костылей починить

import { useQuery } from "react-query";
import { SplitCol, View, SplitLayout, Spinner, Button, Title } from "@vkontakte/vkui";
import { apiClient } from "../../shared/api";
import { GroupList } from "../../widgets/GroupList";
import { useContext } from "react";
import { ActivePanelContext } from "../../shared/context/ActivePanelСontext";
import { GroupDescription } from "../../widgets/GroupDescription";
import { IsAlertOpenedContext } from "../../shared/context/IsAlertOpenedContext";
import { Filters } from "../../features/Filters";
import { Modal } from "./Modal";
import { TGetGroupsResponse } from "../../shared/types";
import { Icon56GlobeCrossOutline } from "@vkontakte/icons";
import styles from "./index.module.css";

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

  const { status, data, refetch, error } = useQuery("group", () => apiClient.get("groups"), {
    retry: 0,
    staleTime: Infinity
  });

  return (
    <SplitLayout
      popout={alert}
      modal={
        status === "success" && (
          <Modal>
            <Filters id="filters" availableColors={getColorsWithoutDuplicates(data)} />
          </Modal>
        )
      }
    >
      {status === "loading" && <Spinner size="large" style={{ margin: "auto" }} />}

      {status === "error" && (
        <div className={styles.error + " " + styles.centered}>
          <Icon56GlobeCrossOutline />
          <Title level="2">Код ошибки: {error.code}</Title>
          <Title level="3" className={styles.text}>
            Сообщение ошибки: {error.message}
          </Title>
          <Button size="l" onClick={refetch} className={styles.button}>
            Попробовать еще раз
          </Button>
        </div>
      )}

      {status === "success" && (
        <SplitCol maxWidth={500} className={styles.centered}>
          <View activePanel={activePanel}>
            <GroupList id="group-list" groups={data} />
            {data.map((group) => (
              <GroupDescription id={`group--${group.id}`} key={`group--${group.id}`} info={group} />
            ))}
          </View>
        </SplitCol>
      )}
    </SplitLayout>
  );
}
