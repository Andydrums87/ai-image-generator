import { create }  from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { mainURL } from "../utils/axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import authStore from "./authStore"
import { randomPrompts } from "../constants";

export const imageStore = create(
    persist(
    (set, get) => ({
      form: {
        prompt: "",
        size: "",
        style: "",
        colors: "",
       },
       search: {
        keyword: ""
       },
       searchImages: {
        searchItem: "",
       },
       isOpen: false,
       images: null,
       userImages: null,
       selectedImage: null,
       allImages: null,
       hasMore: true,
       page: 1,
       total: null,
       totalPages: 1,
       loading: false,
       collections: null,
   
      handleChange: (e) => {
        const {name, value} = e.target;
        set((state) => {
            return {
                    form: {
                        ...state.form,
                        [name]: value,
                    },};
            });
      },
      handleSearchChange: (e) => {
        const {name, value} = e.target;
        set((state) => {
            return {
                    search: {
                        ...state.search,
                        [name]: value,
                    },};
            });
      },
      handleSize: (e) => {
        const {name, value} = e.target;
        set((state) => {
            return {
                    form: {
                        ...state.form,
                        [name]: value,
                        
                    }};   
                  
            }); 
        
      },
      handleStyle: (e) => {
        const {name, value} = e.target;
        set((state) => {
            return {
                    form: {
                        ...state.form,
                        [name]: value,
                    },};
            }); 
            
      
      },
      handleRandomPrompt: (e) => {
        const prompt = randomPrompts[Math.floor(Math.random() * randomPrompts.length)]
        set((state) => {
            return {
                    form: {
                        ...state.form.prompt,
                        prompt,
                    },};
            });
      },
      handleSubmit: async (e) => {
        e.preventDefault()
        set({ loading: true })
        set({ images: null})
        const { form } = imageStore.getState()
            await mainURL.post("/api/create", form)
            .then(result => {
             set({ images: result.data })
                set({ form: {
                    prompt: "",
                    size:"",
                    style: "",
                }})
                set({ loading: false })
            })
            .catch((err) => {
                console.log(err)
                set({ loading: false})
            })
      },
      addImage: async (e) => {
        set({ loading: true })
        const auth = authStore.getState().data._id  
          const res = await mainURL.post(`/api/create/image/${e.target.id}`, { auth })
          .then(result => {
                set({ loading: false})
                toast.success("Image Added Successfully")
          })
          .catch((err) => console.log(err))
      },
      deleteImage: async (e) => {
        const auth = authStore.getState().data._id
        set({ loading: true })
        const result = get().collections?.find(({ originalId }) => originalId === e.target.id);
          await mainURL.delete(`/api/delete/image/${result.originalId}`, { auth })
          .then(result => {
            const newCollections = get().collections?.filter(col=>{
                return col.originalId !== e.target.id
            })
              set({ collections: newCollections })
           
    
                toast.success("Image Deleted Successfully")
                set({ loading: false})   

        })
           .catch((err) => console.log(err))
      },
      fetchImages: async () => {
        set({ loading: true })
        const auth = authStore.getState().data._id
        set({ userImages: null })
        set({ page: 1 })
        await mainURL.get(`/api/images/${auth}?page=${get().page}&limit=8`)
        .then((res) => {
        set({ userImages: res.data.images })
        set({ total: res.data.total })
        setTimeout(() => {
            set({ loading: false})
        }, 2000)
        })
        .catch((err) => console.log(err))        
      },
      fetchMoreUserImages: async () => {
        set({ loading: true})
        const auth = authStore.getState().data._id
        set((state) => ({ page: state.page + 1 }))
        await new Promise((resolve)=>setTimeout(resolve, 2000))
        await mainURL.get(`/api/images/${auth}?page=${get().page}&limit=8`)
        .then(res => {
            const data = res.data.images
            set((state) => ({ userImages: [...state.userImages, ...data]}))
            setTimeout(() => {
                set({ loading: false})
            }, 2000)
        })
        .catch((err) => console.log(err))
      },
      fetchAllImages: async () => {
                // set({ loading: true })
                set({ allImages: null })
                set({ page: 1 })
                await mainURL.get(`/api/allImages/results?page=${get().page}&limit=8`)
                .then((res) => {
                set({ allImages: res.data.images })
                set({ total: res.data.total })
                // setTimeout(() => {
                //     set({ loading: false})
                // }, 1000)
                })
                .catch((err) => console.log(err))        
      },
      fetchMoreImages: async () => {
        set({ loading: true})
        set((state) => ({ page: state.page + 1 }))
        await new Promise((resolve)=>setTimeout(resolve, 2000))
        await mainURL.get(`/api/allImages/results?page=${get().page}&limit=8`)
        .then(res => {
            const data = res.data.images
            set((state) => ({ allImages: [...state.allImages, ...data]}))
            set({ loading: false })
        })
        .catch((err) => console.log(err))
      },
      handleSearch: async (e) => {
        e.preventDefault()
        set({ loading: true })
        const { search } = imageStore.getState()
        await mainURL.post(`/api/search/?q=${search.keyword}`)
        .then((res) => {
           
            if(res.data?.images?.length === 0) {
                set({ loading: false })
            }
            set({ allImages: res.data.images })
            set({ search: { keyword: ""}})
            set({ loading: false })
            })
            .catch((err) => console.log(err))
      },
      handleSelectImage: async (e) => {
        set({ loading: true })
        set({ selectedImage: null })
        await mainURL.get(`/api/image/${e.target.id}`)
        .then(res => {
           set({ selectedImage: res.data })
           setTimeout(() => {
            set({ loading: false})
           }, 1000)

        })
        .catch(err => console.log(err))
      },
      fetchCollections: async () => {
        set({ loading: true })
        const auth = authStore.getState().data._id
      
        await mainURL.get(`/api/collections/${auth}`)
        .then((res) => {
            const data = res.data.collection
            set({ collections: data})
            set({ loading: false})
        })
        .catch(err => console.log(err))
      },
      handleOpen: async ()=> { set({ isOpen: true })},
      handleClose: async () => { set ({ isOpen: false })}, 
      initialState: async () => { set({ images: null }); set({ userImages: null }); set({ page: 1 }); set({ loading: false }); set({ collections: null}); set({ userImages: null}); set({ allImages: null}) }

      }),
  

    {
      name: "cart", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },

    
),
)

export default imageStore;
