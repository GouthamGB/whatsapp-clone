import { useRouter } from 'next/router'
import { useContext, useState } from 'react';
import styles from '../../styles/Personalinfo.module.css'
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import { IconButton } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';


function Personalinfo() {
  const {setprofile} = useContext(AuthContext)
  const router = useRouter()
  const [profilePic, setProfilePic]=useState(null)
  const [username, setUsername] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log("heyoooo")
    try{
      await setprofile(profilePic, username)
      
    
    }catch(err){
      console.log(err)
    }
    
  }

  return (

    <div className={styles.p_container}>
        <div className={styles.p_box}>
          <div className={styles.p_header}>
            <h1>Personal Info</h1>
          </div>

          <form className={styles.p_form} onSubmit={handleSubmit}>
            <label htmlFor="profile"><IconButton><AddAPhotoRoundedIcon className={styles.icon} style={{ color: "purple", fontSize: "80px"}}/></IconButton></label>
            <input type="file" placeholder='Profile pic' id='profile' onChange={(e)=>{ setProfilePic(e.target.files[0])}}  accept=".jpg, .jpeg, .png"/>
            <input type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
        

            <button type='submit'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Personalinfo




