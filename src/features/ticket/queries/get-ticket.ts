import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import prisma from "@/lib/prisma";

// We can use cache() function from react to cache the result of this action (request memoization)
// https://rwieruch.teachable.com/courses/the-road-to-next/lectures/53965436

export const getTicket = async (ticketId: string) => {
  const { user } = await getAuth();

  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  if (!ticket) {
    return null;
  }

  return { ...ticket, isOwner: isOwner(user, ticket) };
};
