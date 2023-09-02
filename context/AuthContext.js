import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null);
    const router  = useRouter();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        })
    },[router])

    const handleLogout = async()=>{
        console.log("logout")
        await signOut(auth);
        console.log("succes")
        router.push("/login");
        }

    return <AuthContext.Provider value={{user,handleLogout}}>
        {children}
    </AuthContext.Provider>
}