"use client";

import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

export type UserContextType = {
    userId: number | null
}

const UserContext = createContext<UserContextType>({
    userId: null
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children, userId }: { children: React.ReactNode, userId: number | null }) => {
    return <UserContext.Provider value={{userId}}>{children}</UserContext.Provider>
}   