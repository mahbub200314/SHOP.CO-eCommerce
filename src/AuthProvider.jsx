import { onAuthStateChanged } from "firebase/auth"
import {  createContext, useEffect, useState } from "react"
import { auth } from "../public/firebase"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const[user, setUser] = useState(null)
      const [loading, setLoading] = useState(true) // ✅ loading state
     

    useEffect(()=>{
         const unsub = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
             setLoading(false) // ✅ data আসার পর loading false
             
         });
         return () => unsub()
    },[])

  return (
    <div>
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
