import clsx from "clsx";
import {
  LucideMoreVertical,
  LucidePencil,
  LucideSquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { Comments } from "@/features/comment/components/comments";
import { CommentWithMetadata } from "@/features/comment/types";
import { ticketEditPath, ticketPath } from "@/paths";
import { fromCurrencyToCents } from "@/utils/currency";
import { TICKET_ICON } from "../constants";
import { TicketWithMetadata } from "../types";
import TicketMoreMenu from "./ticket-more-menu";

type TicketItemProps = {
  ticket: TicketWithMetadata;
  isDetail?: boolean;
  comments?: CommentWithMetadata[];
};

const TicketItem = async ({ ticket, isDetail, comments }: TicketItemProps) => {
  console.log("Where am I displayed? (TicketItem)");

  const { user } = await getAuth();
  const isTicketOwner = isOwner(user, ticket);

  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="!w-5 !h-5" />
      </Link>
    </Button>
  );

  const editButton = isTicketOwner ? (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketEditPath(ticket.id)}>
        <LucidePencil className="!w-5 !h-5" />
      </Link>
    </Button>
  ) : null;

  const moreMenuButton = isTicketOwner ? (
    <TicketMoreMenu
      ticket={ticket}
      trigger={
        <Button variant="outline" size="icon">
          <LucideMoreVertical className="!w-5 !h-5" />
        </Button>
      }
    />
  ) : null;

  return (
    <div
      className={clsx("w-full flex flex-col gap-y-4", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <div className="flex gap-x-2">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle className="flex gap-x-2">
              <span>{TICKET_ICON[ticket.status]}</span>
              <span className="truncate">{ticket.title}</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <span
              className={clsx("whitespace-break-spaces", {
                "line-clamp-3": !isDetail,
              })}
            >
              {ticket.content}
            </span>
          </CardContent>

          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              {ticket.deadline} by {ticket.user.username}
            </p>
            <p className="text-sm text-muted-foreground">
              {fromCurrencyToCents(ticket.bounty)}
            </p>
          </CardFooter>
        </Card>
        <div className="flex flex-col gap-y-1">
          {isDetail ? (
            <>
              {editButton}
              {moreMenuButton}
            </>
          ) : (
            <>
              {detailButton}
              {editButton}
            </>
          )}
        </div>
      </div>

      {isDetail ? (
        // <Suspense
        //   fallback={
        //     <div className="flex flex-col gap-y-4">
        //       <Skeleton className="h-[250px] w-full" />
        //       <Skeleton className="h-[80px] ml-8" />
        //       <Skeleton className="h-[80px] ml-8" />
        //     </div>
        //   }
        // >
        <Comments ticketId={ticket.id} comments={comments} />
      ) : // </Suspense>
      null}
    </div>
  );
};

export default TicketItem;
