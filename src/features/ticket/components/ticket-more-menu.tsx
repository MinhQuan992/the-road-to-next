"use client";

import { Ticket, TicketStatus } from "@prisma/client";
import { LucideTrash } from "lucide-react";
import { ReactNode } from "react";
import { toast } from "sonner";
import useConfirmDialog from "@/components/confirm-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteTicket } from "../actions/delete-ticket";
import { updateTicketStatus } from "../actions/update-ticket-status";
import { TICKET_STATUS_LABEL } from "../constants";

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: ReactNode;
};

const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  const [deleteButton, deleteDialog] = useConfirmDialog({
    action: deleteTicket.bind(null, ticket.id),
    trigger: (
      <DropdownMenuItem>
        <LucideTrash />
        <span>Delete</span>
      </DropdownMenuItem>
    ),
  });

  const handleUpdateTicketStatus = async (value: string) => {
    const promise = updateTicketStatus(ticket.id, value as TicketStatus);
    toast.promise(promise, {
      loading: "Updating status...",
    });
    const result = await promise;
    if (result.status === "ERROR") {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
  };

  const ticketStatusRadioGroupItems = (
    <DropdownMenuRadioGroup
      value={ticket.status}
      onValueChange={handleUpdateTicketStatus}
    >
      {(Object.keys(TICKET_STATUS_LABEL) as Array<TicketStatus>).map(
        (status) => (
          <DropdownMenuRadioItem key={status} value={status}>
            {TICKET_STATUS_LABEL[status]}
          </DropdownMenuRadioItem>
        )
      )}
    </DropdownMenuRadioGroup>
  );

  return (
    <>
      {deleteDialog}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="right">
          {ticketStatusRadioGroupItems}
          <DropdownMenuSeparator />
          {deleteButton}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default TicketMoreMenu;
