import { notFound } from "next/navigation";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
// import { getTickets } from "@/features/ticket/queries/get-tickets";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);
  const isTicketFound = !!ticket;

  if (!isTicketFound) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

// We can generate static param to generate static individual ticket page like this
// Run `next build` to verify the differences
// export async function generateStaticParams() {
//   const tickets = await getTickets();
//   return tickets.map((ticket) => ({
//     ticketId: ticket.id,
//   }));
// }

export default TicketPage;
