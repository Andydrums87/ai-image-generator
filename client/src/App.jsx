import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import "./index.css"
import CreateImagePage from "./pages/CreateImagePage"
import Login from "./pages/Login"
import MyCollections from './pages/MyCollections'
import GenerationHistory from './pages/GenerationHistory'
import Nav from "./components/Nav"
import ProtectedRoutes from './utils/ProtectedRoutes'
import Feed from './pages/Feed'
import authStore from './stores/authStore'
import imageStore from './stores/imageStore'


function App() {

  const checkAuth = authStore((state) => state.checkAuth)
  const isOpen = imageStore((state) => state.isOpen)
  const setUser = authStore((state) => state.setUser)

  useEffect(() => {
    setUser()
  }, [])

  useEffect(() => {
    checkAuth()
  }, [])

  const [nav, setNav] = useState(false);

const handleNav = () => {
    setNav(!nav);
  };

  return (
     <BrowserRouter>
     <div className={
      isOpen 
      ? "relative z-0 bg-grey-black"
      : "relative z-0 bg-primary"
      }>

      <Nav nav={nav} handleNav={handleNav}  />
          <div className={`${
            nav 
              ? "blur-md" 
              : "" }
              pt-20 md:py-10 md:px-3 w-[100%] md:ml-20 min-h-screen`}>
     <Routes>
        <Route path="/" element={ <CreateImagePage /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/feed" element={ <Feed /> }/>
        <Route path="/collections" element={ 
            <ProtectedRoutes>
              <MyCollections /> 
            </ProtectedRoutes>
          }/>
        <Route path="/history" element={ 
            <ProtectedRoutes>
             <GenerationHistory /> 
            </ProtectedRoutes>
          } />
      </Routes>
     </div>
     </div>
   </BrowserRouter>
  )
}

export default App;
