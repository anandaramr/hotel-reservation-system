import { createContext, useState } from "react";
import { axiosJwt } from "./axios";
import { getCookie, removeCookie } from "../utils";

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const authorize = async () => {
        setIsLoading(true)
        await axiosJwt.get('/user')
        .then(res => {
            setUser(res.data)
            setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
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
        .catch(() => setIsLoading(false))
    }

    const data = { user, isLoading, logout, authorize }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}