import { create } from "zustand";

const useUserProfileStore = create((set)=>({
    userProfile:null,
    setUserProfile:(userProfile)=>set({userProfile}),
    addPost: (post)=>set(state=>({
        userProfile:{...state.userProfile,post:[post.id,...state.userProfile.post]}
    }))
}))
export default useUserProfileStore;