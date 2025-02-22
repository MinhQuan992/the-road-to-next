import { redirect } from "next/navigation";
import { Suspense } from "react";
import Heading from "@/components/heading";
import Spinner from "@/components/spinner";
import { getAuth } from "@/features/auth/queries/get-auth";
import CardCompact from "@/features/ticket/components/card-compact";
import TicketList from "@/features/ticket/components/ticket-list";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";
import { signInPath } from "@/paths";

// Opt-out static rendering, if not, the ticket list is kept static and does not reflect any changes in Production mode
// when the data changes
// https://rwieruch.teachable.com/courses/the-road-to-next/lectures/53965382
// Use: export const dynamic = "force-dynamic";
//
// Otherwise, we can still keep it static rendering but use ISR (Incremental Static Regeneration)
// with time-based caching:
// export const revalidate = 0;
// or on-demand caching:
// `revalidatePath()` in server action

const TicketsPage = async () => {
  const { user } = await getAuth();

  if (!user) {
    redirect(signInPath());
  }

  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />
      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        className="w-full max-w-[420px] self-center"
        content={<TicketUpsertForm />}
      />
      {/* <ErrorBoundary fallback={<Placeholder label="Something went wrong" />}> */}
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default TicketsPage;
