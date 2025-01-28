import { getEvent } from "@/lib/db/event-repository";
import { getEventEntries } from "@/lib/db/event-entry-repository";
import { CreateEventEntryButton } from "./create-event-entry-button";
import { DeleteEventButton } from "./delete-event-button";

const gradients = [
    'from-blue-50 to-indigo-100',
    'from-green-50 to-emerald-100',
    'from-purple-50 to-violet-100',
    'from-pink-50 to-rose-100',
    'from-yellow-50 to-amber-100',
    'from-red-50 to-orange-100'
];

export const EventWidget = async ({eventId}: {eventId: number}) => {
    const event = await getEvent(eventId)
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    const entries = await getEventEntries(eventId)

    return <div className={`p-4 border w-300 rounded-lg shadow-sm bg-gradient-to-br ${randomGradient}`}>
                        <h3 className="text-lg font-medium mb-2">{event.name} ({entries.length})</h3>
                        <CreateEventEntryButton eventId={eventId} />
                        <DeleteEventButton eventId={eventId} />
                    </div>
}