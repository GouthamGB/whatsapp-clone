import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import {auth,storage, db} from '../config/firebase'
import { doc, setDoc, } from "firebase/firestore"; 



import {v4} from 'uuid'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Router, useRouter } from "next/router";
import { SelectUnstyledContext } from "@mui/base";

export const AuthContext = createContext({})

export const AuthContextProvider = ({children})=>{

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL

                })
            }
            else{
                setUser(null)
            }

            setLoading(false)
        })
        return ()=> unsubscribe

    },[])

   




    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async (email, password) => {
        setUser(null)
        await signOut(auth)
    }

    const setprofile = async (image, username)=>{
        
        const imageRef = ref(storage, `profile/images/${image.name + v4()}` )
        

        await uploadBytesResumable(imageRef, image).then(() => {
            getDownloadURL(imageRef).then(async (downloadURL) => {
                try {
                    await updateProfile(auth.currentUser, {
                        displayName: username, photoURL: downloadURL
                    })

                    setUser(prev=>({...prev, displayName: username, photoURL: downloadURL}))

            
                    await setDoc(doc(db, "users",user.uid), {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    });
                    await setDoc(doc(db, "userChats", user.uid), {});
                    router.push('/')
            }
            catch(err){
                console.log(err)
            }    
        })
    
        })
        

    }


    return (
        <AuthContext.Provider value={{user, login, signup, logout, setprofile}}>
            {loading ? null:children}
        </AuthContext.Provider>
    )
}