import { supabase } from "../supabase"

export const createUser = async (clerkUserId: string) => {
    const { data, error } = await supabase
    .from('user')
    .insert({
        clerk_user_id: clerkUserId
    })

    if(error) {
        console.error(error)
        throw new Error(error.message);
    }

    return data
}

export const getUserByClerkId = async (clerkUserId: string) => {
    const { data, error } = await supabase.from('user').select('*').eq('clerk_user_id', clerkUserId).limit(1).single()

    if(error) {
        console.error(error)
        throw new Error(error.message);
    }

    return data
}
