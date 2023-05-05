import { Subjects } from "./subjects";

// each event will have its own event that handles type validation
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    verion: number;
    title: string;
    price: number;
    userId: string;
  };
}
