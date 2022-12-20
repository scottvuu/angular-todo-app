export interface StatusButton {
  type: Status;
  label: string;
  isActive: boolean;
}

export enum Status {
  All,
  Active,
  Completed,
}
