import authStore from "../stores/authStore"
import { useEffect } from "react"
import Home from "../pages/Home"


export default function ProtectedRoutes(props) {

    const isLoggedIn = authStore((state) => state.isLoggedIn)
    const checkAuth = authStore((state) => state.checkAuth)

    useEffect(() => {
        if(isLoggedIn === null) {
            checkAuth()
        }
    }, [])

    if(isLoggedIn === false) {
        return <Home />
    }

    return <div>{props.children}</div>
}