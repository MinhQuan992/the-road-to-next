import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

export const TICKET_ICON = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
};

export const TICKET_STATUS_LABEL = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
