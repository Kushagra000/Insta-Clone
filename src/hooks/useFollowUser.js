import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore'

const useFollowUser = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false)
    const [isFollowing, setIsFollowing]= useState(false)
    const authUser = useAuthStore(state=> state.user)
    useEffect(()=>{
        if(authUser){
            
        }
    },[])
}

export default useFollowUser