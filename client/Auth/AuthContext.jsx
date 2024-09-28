import { createContext, useEffect, useState } from "react";
import { axiosJwt } from "./axios";
import { getCookie, removeCookie } from "../utils";

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {

    useEffect(() => {
        authorize()
    }, [])

    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const authorize = () => {
        setIsLoading(true)
        axiosJwt.get('/user')
        .then(res => {
            setUser(res.data)
            setIsLoading(false)
        })
    }

    const logout = () => {
        setIsLoading(true)
        axiosJwt.post('/auth/logout', { token: getCookie('ref') })
        .then(() => {
            removeCookie('auth')
            removeCookie('ref')
            setUser("")
            setIsLoading(false)
        })
    }

    const data = { user, authorize, isLoading, logout }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}