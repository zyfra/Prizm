export interface GroupExpandedChangedEvent {
  groupId: string;
  isExpanded: boolean;
}

export interface ItemExpandedChangedEvent<UserItem> {
  item: UserItem;
  isExpanded: boolean;
}
