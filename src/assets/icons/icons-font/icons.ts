export type IconsId =
  | "check"
  | "close"
  | "danger"
  | "details"
  | "info"
  | "refresh"
  | "trash";

export type IconsKey =
  | "Check"
  | "Close"
  | "Danger"
  | "Details"
  | "Info"
  | "Refresh"
  | "Trash";

export enum Icons {
  Check = "check",
  Close = "close",
  Danger = "danger",
  Details = "details",
  Info = "info",
  Refresh = "refresh",
  Trash = "trash",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Check]: "61697",
  [Icons.Close]: "61698",
  [Icons.Danger]: "61699",
  [Icons.Details]: "61700",
  [Icons.Info]: "61701",
  [Icons.Refresh]: "61702",
  [Icons.Trash]: "61703",
};
