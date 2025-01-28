"use server";

import { supabase } from "../supabase"

export const addEvent = async (eventName: string, userId: number) => {
    const { data, error } = await supabase.from('events').insert({name: eventName, user_id: userId}).select()

    if(error) {
        console.error(error)
        throw new Error(error.message);
    }

    return data
}

export const getEvents = async (userId: number) => {
    const { data, error } = await supabase.from('events').select('*').eq('user_id', userId)
    if(error) {
        console.error(error)
        throw new Error(error.message);
    }

    return data
}   

export const getEvent = async (eventId: number) => {
    const { data, error } = await supabase.from('events').select('*').eq('id', eventId).single()
    if(error) {
        console.error(error)
        throw new Error(error.message);
    }
    return data 
}   

export const deleteEvent = async (eventId: number) => {
    const { error } = await supabase.from('events').delete().eq('id', eventId)
    if(error) {
        console.error(error)
        throw new Error(error.message);
    }
}