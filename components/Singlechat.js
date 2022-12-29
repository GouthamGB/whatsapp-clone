import React from 'react'
import { Avatar } from '@mui/material'
import  styles from '../styles/Sidebar.module.css'

function Singlechat({profilepic, name }) {
  return (
    <div className={styles.singlechat}>
    <Avatar src={profilepic}/>
    <div className={styles.message_wrapper}>
      <h3>{name}</h3>
      <h4>Message</h4>
    </div>
    </div>
  )
}

export default Singlechat