import { create }  from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { mainURL } from "../utils/axios"


export const authStore = create(
    persist(
    (set, get) => ({
        isLoggedIn: false,
        user: null,
        isLoading: false,
        isOpen: false,
        setUser: async () => {
            mainURL.get(`/auth/login/sucess`, {withCredentials: true})
            .then(response => {
            const data = response.data.user
               set({ data })
               set({ user: data })
            
            })
            .catch(err => console.log(err))
        },
        checkAuth: async () => {
            try {
               const res = await mainURL.get('/auth/check', { withCredentials: true });
               if(res.data.isLoggedIn === true) {
                set({ isLoggedIn: true })
               }
            } catch (err) {
                set({ isLoggedIn: false})
            }
        },
        handleLogout: async (e) => {
                try {
                    await mainURL.get("/auth/logout", {withCredentials: true})
                    
                        set({ isLoggedIn: false })  
                        set({ user: null})
                    
                } catch (err) {
                    console.log(err)
                }
        },
        initialState:  async () => { set({ user: null }); set({ isLoading: false }) },
        handleOpen: async ()=> { set({ isOpen: true })},
        handleClose: async () => { set ({ isOpen: false })}, 
     
    }),
    
    {
      name: `user`, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
    
),
)




export default authStore;
