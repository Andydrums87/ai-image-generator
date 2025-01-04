import authStore from "../stores/authStore"
import { useEffect } from "react"
import Login from "../pages/Login"


export default function ProtectedRoutes(props) {

    const isLoggedIn = authStore((state) => state.isLoggedIn)
    const checkAuth = authStore((state) => state.checkAuth)

    useEffect(() => {
        if(isLoggedIn === null) {
            checkAuth()
        }
    }, [])

    if(isLoggedIn === false) {
        return <Login />
    }

    return <div>{props.children}</div>
}