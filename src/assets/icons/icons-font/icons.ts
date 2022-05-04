export type IconsId =
  | "arrow-right"
  | "check"
  | "close"
  | "danger"
  | "details"
  | "info"
  | "refresh"
  | "trash";

export type IconsKey =
  | "ArrowRight"
  | "Check"
  | "Close"
  | "Danger"
  | "Details"
  | "Info"
  | "Refresh"
  | "Trash";

export enum Icons {
  ArrowRight = "arrow-right",
  Check = "check",
  Close = "close",
  Danger = "danger",
  Details = "details",
  Info = "info",
  Refresh = "refresh",
  Trash = "trash",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowRight]: "61697",
  [Icons.Check]: "61698",
  [Icons.Close]: "61699",
  [Icons.Danger]: "61700",
  [Icons.Details]: "61701",
  [Icons.Info]: "61702",
  [Icons.Refresh]: "61703",
  [Icons.Trash]: "61704",
};
