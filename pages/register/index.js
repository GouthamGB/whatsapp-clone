import React from 'react'
import Head from 'next/head'
import { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useRouter } from 'next/router'
import styles from '../../styles/Register.module.css'

function Register() {
    const { user,signup} = useContext(AuthContext)
    const router = new useRouter()

    const [regEmail, setRegEmail] = useState("")
    const [regPassword, setRegPassword] = useState("")

    const handleSignup = async (e) =>{
        e.preventDefault()
    
        try{
          await signup(regEmail, regPassword)
          setRegEmail("")
          setRegPassword("")
          router.push("/register/personalinfo")
        }
        catch(err){
          console.log(err)
          
        }
      }

    

  return (
    <div className={styles.reg}>
        <Head>
            <title>Register</title>
        </Head>

        {/* topbar */}
        <div className={styles.bar}>
          <div className={styles.bar_inner}>
            <h2>WAPPUP</h2>
          </div>
        </div>

        {/* form container */}
        <div className={styles.reg_form_container}>
        
          <h1>Sign UP</h1>
          {/* form */}
          <form onSubmit={handleSignup}>
            <input type="text" placeholder='email' onChange={(e)=>setRegEmail(e.target.value)} value={regEmail}/>
            <input type="password" placeholder='password' onChange={(e)=>setRegPassword(e.target.value)} value={regPassword}/>
            <button type='submit'>Sign in</button>
          </form>

          <div className={styles.ruler}>

          </div>

          <div className={styles.login_redirect}>
            <h3>Already have an accounte?</h3>
            <button>Login</button>
          </div>

        

        </div>
    </div>
  )
}

export default Register




