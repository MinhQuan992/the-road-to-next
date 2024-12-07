import Heading from "@/components/heading";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";

const TicketsPage = async () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <div className="flex flex-col flex-1 items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
