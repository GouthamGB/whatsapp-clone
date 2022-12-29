import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'

function ProtectedRoute({children}) {
    const {user} = useContext(AuthContext)
    const router = useRouter()

    useEffect(()=>{
        if(!user){
            router.push('/login')
        }
    }, [router, user])
  return (
    <> {user?children:null}</> 
    )
}

export default ProtectedRoute