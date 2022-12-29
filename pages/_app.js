import '../styles/globals.css'

import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'
import { useRouter } from 'next/router'


const noAuthRequired = ['/login','/register']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
 


  return( 
  <AuthContextProvider>
    
      {noAuthRequired.includes(router.pathname)? 
      (<Component {...pageProps} />): 
      <ProtectedRoute>
        <Component {...pageProps}/>
      </ProtectedRoute>
        }

      
  </AuthContextProvider>
  )
}

export default MyApp
