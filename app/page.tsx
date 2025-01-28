import { CreateEventButton } from "@/components/create-event-button";
import { EventList } from "@/components/event-list";
import { createUser, getUserByClerkId } from "@/lib/db/user-repository";
import { UserProvider } from "@/components/user-provider";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()

  if (user) {
    const userInDb = await getUserByClerkId(user.id)
    if (!userInDb) {
      await createUser(user.id);
    }
  }

  const userInDb = user ? await getUserByClerkId(user.id) : null

  return (
    <UserProvider userId={userInDb?.id}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">My Events</h1>
              <SignedIn>
              <CreateEventButton/>
              <UserButton />
              </SignedIn>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SignedIn>
            <EventList/>
          </SignedIn>
        </main>
      </div>
    </UserProvider>
  );
}
