"use client"
import { deleteEvent } from "@/lib/db/event-repository"
import { DeleteWithConfirmationButton } from "./delete-with-confirmation-button"

export const DeleteEventButton = ({ eventId }: { eventId: number }) => {
    return <DeleteWithConfirmationButton onClick={() => deleteEvent(eventId)} />
}       