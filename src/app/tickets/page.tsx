import clsx from "clsx";
import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/utils/paths";

const TICKET_ICON = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X",
};

const TicketsPage = async () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>

      <div className="flex flex-col flex-1 items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="max-w-[420px] p-4 border border-slate-100 rounded"
          >
            <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
            <p
              className={clsx("text-sm text-slate-500 truncate", {
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.content}
            </p>
            <div>{TICKET_ICON[ticket.status]}</div>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
