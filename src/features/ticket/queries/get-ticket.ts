import prisma from "@/lib/prisma";

// We can use cache() function from react to cache the result of this action (request memoization)
// https://rwieruch.teachable.com/courses/the-road-to-next/lectures/53965436

export const getTicket = async (ticketId: string) => {
  return await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });
};
