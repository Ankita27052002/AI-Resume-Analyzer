import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/shared/config/firebase";

// 1. Create context
const AuthContext = createContext();

// 2. Custom hook for using AuthContext
export const useAuth = () => useContext(AuthContext);

// 3. AuthProvider component
export function AuthProvider({ children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 4. Listen for auth state changes on mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        });
        return unsubscribe;
    }, []);

    
      // 5. Define auth actions
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout = () => signOut(auth);

     // 6. Provide values to children
    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
        {!loading && children}
        </AuthContext.Provider>
    );

}