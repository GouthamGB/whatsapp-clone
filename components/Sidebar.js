import React, { useContext } from 'react'
import { Avatar, Button, IconButton } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { AuthContext } from '../context/AuthContext';
import styles  from '../styles/Sidebar.module.css'
import Singlechat from './Singlechat';

function Sidebar() {

    const {user, logout} = useContext(AuthContext)

    const handleSignout =()=>{
      logout()
    }

    const names = ["killer", "kidd", "luffy", "zoro"]
    


  return (
    <div className={styles.sidebar}>
        <div className={styles.header}>
            <div className={styles.display_name}>
                <Avatar/>
                <h3>Username</h3>
            </div>
            <Button className='primary' onClick={handleSignout}>Logout</Button>
        </div>
        <div className={styles.search}>
            <div className={styles.searchbar}>
                <SearchIcon/>
                <input type="text" placeholder='search a user' />
            </div>
            <div className={styles.search_results}>
                <div>Single Result</div>
            </div>
        </div>

        <div className={styles.chatList}>
            {   names.map((name, index)=>(
                    <Singlechat name={name} profilepic={"https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"} key={index} />
            )
            )
            }
        </div>
    </div>
  )
}

export default Sidebar

// const Container = styled.div`

// `
// const Header = styled.div`
// display: flex;
// position: sticky;
// top: 0;
// background-color: white;
// z-index: 1;
// justify-content: space-between;
// align-items: center;
// padding: 15px;
// height: 80px;
// border-bottom: 1px solid whitesmoke;

// `

// const UserAvatar = styled(Avatar)`
// cursor: pointer;
// :hover {
//     opacity: 0.8;
// }
//  `

// const IconsContainer = styled.div`
    
// `

// const Search = styled.div`
// display: flex;
// align-items: center;
// padding: 5px;
// border-radius: 2px;
// `

// const SearchIconStyled = styled(SearchIcon)`
//     color: black;
    
// `

// const SearchInput = styled.input`
// outline-with: 0;
// border: none;
// flex: 1;
// background-color: white;
// color: black;

// `
// const SidebarButton = styled(Button)`
//     width: 100%;
//     color: black;
//     &&&{
//         border-top: 1px solid whitesmoke;
//         border-bottom: 1px solid whitesmoke;
//     }
    

// `