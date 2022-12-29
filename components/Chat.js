import React from 'react'
import Chatnav from './Chatnav'
import ChatContainer from './ChatContainer'
import styles from '../styles/Chat.module.css'

function Chat() {
  return (
    <div className={styles.chat}>
        <Chatnav/>
        <ChatContainer/>
    </div>
  )
}

export default Chat