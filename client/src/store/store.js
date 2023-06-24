import create from 'zustand';

export const useAuthStore = create((set) => ({  //set the parameter as a variable used to set new value to store
    auth : {
        username : '',
        active : false
    },
    setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
}))