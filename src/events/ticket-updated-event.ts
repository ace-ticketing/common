import { Subjects } from "./subjects";

// each event will have its own event that handles type validation
export interface TicketUpdatedEvent {
  subject: Subjects.TickedUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
