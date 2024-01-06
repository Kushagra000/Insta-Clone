import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useShowToast from './useShowToast';

const useLogOut = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const showToast = useShowToast()
    const handleLogout = async ()=>{
        try{
            await signOut();
            localStorage.removeItem('user-info')
        }catch{
            showToast('Error', error.message,'error')
        }
    }
  return {handleLogout,loading,error}    
}

export default useLogOut