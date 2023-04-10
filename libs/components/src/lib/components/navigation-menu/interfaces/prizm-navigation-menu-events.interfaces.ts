export interface ItemExpandedChangedEvent<UserItem> {
  item: UserItem;
  isExpanded: boolean;
}

export interface GroupExpandedChangedEvent {
  groupId: string;
  isExpanded: boolean;
}
