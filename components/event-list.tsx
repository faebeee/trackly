import { getEvents } from "@/lib/db/event-repository";
import { getCurrentUser } from "@/lib/get-current-user";
import { EventWidget } from "./event-widget";

export const EventList = async () => {
    const user = await getCurrentUser()
    const events = await getEvents(user!.id)

    return <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.map((event) =>  <EventWidget eventId={event.id} key={event.id}  />)}
        </div>
    </div>
}