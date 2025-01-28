import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "./db/user-repository";

export const getCurrentUser = async () => {
    const user = await currentUser()
    const userInDb = user ? await getUserByClerkId(user.id) : null
    return userInDb;
}   