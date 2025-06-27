import { createContext, useEffect, useState, type ReactNode } from "react";

interface User{
    _id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    shipping_addresses: string
}

interface AuthContextInterface{
    userData:User | null
    saveUserData:()=>void
}
export const AuthContext = createContext<AuthContextInterface|null>(null);

interface AuthContextproviderProps {
    children: ReactNode
}

export default function AuthContextProvider({ children }: AuthContextproviderProps) {
    let [userData, setUserData] = useState<User|null>(null);
    let saveUserData = () => {
        localStorage.getItem("accessToken");
        const profileData = JSON.parse(String(localStorage.getItem("profile")));
        if (profileData) {
            setUserData(profileData)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("profile"))
        {
            saveUserData()
        }
    },[])

    return(
        <AuthContext.Provider value={{userData, saveUserData}}>{children}</AuthContext.Provider>
    )
}