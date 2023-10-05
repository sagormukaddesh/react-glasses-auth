import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
const [user, setUser] = useState({}) 
const [loading, setLoading] = useState(true)

   
    // google login 
    const handleGoogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }
    //github login 
    const githubLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

        //sign up 
        const createUser = (email, password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
          
        }

        // login 
        const login = (email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
           
        }



        //using observer
        useEffect(()=>{
           onAuthStateChanged(auth, (user) => {
                setUser(user)
                setLoading(false)
              });
        },[])

        // useEffect(()=>{
        //    const unSubscriber =  onAuthStateChanged(auth, (user) => {
        //         setUser(user)
        //       });

        //       return ()=>{
        //         unSubscriber()
        //       }
        // },[])
        

        const logOut =()=>{
            return signOut(auth)
        }


        const authentications = {
            user,
            loading,
            handleGoogleLogin,
            githubLogin,
            createUser,
            login,
            logOut,
            

        }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;