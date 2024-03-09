export type TGetGroupsResponse = TGroup[];

export type TGroup = {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: TUser[];
};

export type TUser = {
  first_name: string;
  last_name: string;
};
