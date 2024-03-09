import { useQuery } from "react-query";
import { apiClient } from "../../shared/api";
import { GroupList } from "../../widgets/GroupList/ui";

export function Home() {
  const { status, data } = useQuery("group", () => apiClient.get("groups"), {
    retry: 2,
    retryDelay: 2000
  });

  switch (status) {
    case "error":
      return <span>error</span>;
    case "loading":
      return <span>loading</span>;
    case "idle":
      return <span>dile</span>;
    case "success":
      return <GroupList groups={data} />;
  }
}
