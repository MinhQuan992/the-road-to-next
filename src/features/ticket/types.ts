export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: "OPEN" | "IN_PROGRESS" | "DONE";
};
