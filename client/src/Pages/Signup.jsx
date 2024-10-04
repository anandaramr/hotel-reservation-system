import { useContext, useState } from "react"
import { setCookie } from "../../utils"
import { useAxios } from "../../Auth/axios"
import { useNavigate } from "react-router-dom"
import ToggleMode from "../Components/ToggleMode"
import AuthContext from "../../Auth/AuthContext"

function Signup() { 

    const [error, setError] = useState("")
    const [usernameExists, setUsernameExists] = useState(false)
    const { authorize } = useContext(AuthContext)

    const axios = useAxios()
    const navigate = useNavigate()

    const signup = (evt) => {
        evt.preventDefault()
        setError("")

        const form = document.querySelector('#signup')
        const username = form[0].value
        const password = form[1].value
        const confirm = form[2].value

        if(usernameExists) return setError("Username already taken")
        if(username.length<3) return setError("Username must be atleast 3 character")
        if(password.length<4) return setError("Password must be atleast 4 character")
        if(password!=confirm) return setError("Passwords do not match")

        const data = { username, password }
        axios.post('/auth/signup', data)
        .then(res => {
            if(res.data.error) return;
            setCookie('auth', res.data.accessToken)
            setCookie('ref', res.data.refreshToken)
            authorize()
            
            const redirect = new URLSearchParams(window.location.search).get('redirect')
            navigate(`${ redirect ? redirect : '/' }`)
        })
        .catch(err => setError(err.response.data.error))
    }

    const findValidity = (evt) => {
        const value = evt.target.value
        if(!value) return setUsernameExists(false);

        axios.get(`/user/search/exact/${value}`)
        .then(res => {
            if(res.data) setUsernameExists(true);
            else setUsernameExists(false)
        })
    }

    return (
        <div className="dark:bg-gray-950 bg-slate-100 dark:text-white">
            <ToggleMode/>
            <div className="flex h-svh w-full items-center justify-center font-sora">
                <div className="flex flex-col items-center justify-center py-5 w-[27%] shadow-[0_0_15px_1px] shadow-rose-300 dark:shadow-sky-500 rounded-lg gap-4">
                    <div className="min-h-6 w-[80%] flex">{(error || usernameExists) && <div className="text-sm px-2 flex items-center justify-center gap-1 text-rose-500 dark:text-white border-2 w-full rounded-md border-rose-400 dark:border-cyan-400 text-wrap"><span className="material-symbols-outlined text-sm">info</span>{error || (usernameExists && "Username already taken")}</div>}</div>

                    <h1 className="text-3xl font-semibold py-3">
                        Sign Up
                    </h1>
                    <form onSubmit={signup} id="signup" className="flex flex-col text-lg items-center p-2">
                        <input onChange={findValidity} type="text" placeholder="Username" spellCheck="false" autoComplete="off" className={"w-full bg-transparent outline-none dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 px-2 border-b-2 duration-200 focus:border-rose-400 border-b-rose-200 hover:border-red-400" + (usernameExists && ' border-b-rose-400 dark:border-b-cyan-400')} />
                        <input type="password" placeholder="Password" spellCheck="false" autoComplete="off" className="bg-transparent w-full dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 px-2 m-2 duration-200 outline-none border-b-2 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <input type="password" placeholder="Confirm Password" spellCheck="false" autoComplete="off" className="bg-transparent dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 w-full px-2  duration-200 m-2 outline-none border-b-2 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <button className="py-1 px-5 hover:bg-rose-400 border-2 dark:hover:bg-sky-400 dark:border-sky-400  border-rose-400 rounded-lg w-fit hover:text-white duration-150 my-8">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup