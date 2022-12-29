import React, { useContext, useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'


function Login() {
  const { user, login } = useContext(AuthContext)
  
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e) =>{
    e.preventDefault()
    try{
      await login(regEmail, regPassword)
      setLoginEmail("")
      setLoginPassword("")
      
      router.push("/")

      
    }
    catch(err){
      console.log(err)
      
    }
  }


  

  

  return (
    <div>
        <Head>
            <title>Login</title>
        </Head>
        


        <div>
          <h1>Log in</h1>

          <div>
            <input type="text" placeholder='email' onChange={(e)=>setLoginEmail(e.target.value)} value={loginEmail}/>
            <input type="text" placeholder='email' onChange={(e)=>setLoginPassword(e.target.value)} value={loginPassword}/>
            <button onClick={handleLogin}>Login</button>

          </div>

        </div>
        
    </div>
  )
}

export default Login

