import React, { createContext, useState } from "react";

interface iAuthContextProps {
    children: React.ReactNode
}

export const AuthContext = createContext({})

export function AuthProvider({children}: iAuthContextProps){

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}