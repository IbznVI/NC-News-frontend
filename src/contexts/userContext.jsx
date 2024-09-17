import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const defaultUser = {
        username: "User1",
        name: "Jhon Doe"
    }
    return (
        <UserContext.Provider value = {{ defaultUser }}>{children}</UserContext.Provider>
    )
}