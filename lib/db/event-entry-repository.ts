"use server"

import { supabase } from "../supabase";


export const addEventEntry = async (eventId: number, userId: number) => {
    const { data, error } = await supabase.from('event_entries').insert({event_id: eventId, user_id: userId}).select()
    if(error) {
        console.error(error)
        throw new Error(error.message);
    }

    return data
} 

export const getEventEntries = async (eventId: number) => {
    const { data, error } = await supabase.from('event_entries').select('*').eq('event_id', eventId)
    if(error) {
        console.error(error)
        throw new Error(error.message);
    }

    return data
}