import { TGroup } from "../../../shared/types";
import { Group } from "../../../app/entities/Group/ui";

type TGroupListProps = {
  groups: TGroup[];
};
export function GroupList({ groups }: TGroupListProps) {
  return (
    <ul>
      {groups.map((group) => (
        <Group key={group.id} info={group} />
      ))}
    </ul>
  );
}
