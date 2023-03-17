import React, { createContext } from "react";

interface iUserContextProps {
    children: React.ReactNode
}

interface iFormData{
    name?: string,
    email: string,
    password: string,
    confirmPassword?: string
}

interface iUserContext{
    submitForm: (data: iFormData) => void
}

export const UserContext = createContext({} as iUserContext)

export function UserProvider({children}: iUserContextProps){

    async function submitForm(data: iFormData){
        console.log(data)
    }

    return (
        <UserContext.Provider value={{submitForm}}>
            {children}
        </UserContext.Provider>
    )
}