import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tickets = [
  {
    title: "Ticket 1",
    content:
      "This is the first ticket from the database. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut fringilla nulla, quis tempor urna. Nulla ac odio nulla. Nunc rutrum leo sit amet consectetur venenatis. Vivamus posuere arcu eget risus faucibus gravida quis sed massa. Curabitur vestibulum dolor eu hendrerit malesuada. Aliquam tempus fermentum vestibulum. Nam auctor, tellus fringilla suscipit ornare, nisl dolor blandit libero, sed porta risus augue nec risus.",
    status: "DONE" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 499,
  },
  {
    title: "Ticket 2",
    content:
      "This is the second ticket from the database. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut fringilla nulla, quis tempor urna. Nulla ac odio nulla. Nunc rutrum leo sit amet consectetur venenatis. Vivamus posuere arcu eget risus faucibus gravida quis sed massa. Curabitur vestibulum dolor eu hendrerit malesuada. Aliquam tempus fermentum vestibulum. Nam auctor, tellus fringilla suscipit ornare, nisl dolor blandit libero, sed porta risus augue nec risus.",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 399,
  },
  {
    title: "This is a very long title for ticket 3",
    content:
      "This is the third ticket from the database. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut fringilla nulla, quis tempor urna. Nulla ac odio nulla. Nunc rutrum leo sit amet consectetur venenatis. Vivamus posuere arcu eget risus faucibus gravida quis sed massa. Curabitur vestibulum dolor eu hendrerit malesuada. Aliquam tempus fermentum vestibulum. Nam auctor, tellus fringilla suscipit ornare, nisl dolor blandit libero, sed porta risus augue nec risus.",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 599,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB seed started...");

  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({ data: tickets });

  const t1 = performance.now();
  console.log(`DB seed finished in ${t1 - t0}ms`);
};

seed();
