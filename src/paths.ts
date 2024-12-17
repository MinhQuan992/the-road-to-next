export const homePath = () => "/";

export const ticketsPath = () => "/tickets";
export const ticketPath = (id: string) => `/tickets/${id}`;
export const ticketEditPath = (id: string) => `${ticketPath(id)}/edit`;
