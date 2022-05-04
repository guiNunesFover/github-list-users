export type IconsId =
  | "arrow-right"
  | "check"
  | "close"
  | "danger"
  | "details"
  | "folder-open"
  | "info"
  | "refresh"
  | "trash";

export type IconsKey =
  | "ArrowRight"
  | "Check"
  | "Close"
  | "Danger"
  | "Details"
  | "FolderOpen"
  | "Info"
  | "Refresh"
  | "Trash";

export enum Icons {
  ArrowRight = "arrow-right",
  Check = "check",
  Close = "close",
  Danger = "danger",
  Details = "details",
  FolderOpen = "folder-open",
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
  [Icons.FolderOpen]: "61702",
  [Icons.Info]: "61703",
  [Icons.Refresh]: "61704",
  [Icons.Trash]: "61705",
};
