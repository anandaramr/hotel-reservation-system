import { Link, useNavigate } from "react-router-dom"
import { setCookie } from "../../utils"
import { useAxios } from "../../Auth/axios"
import { useContext, useState } from "react"
import ToggleMode from "../Components/ToggleMode"
import AuthContext from "../../Auth/AuthContext"


function Login() {

    const axios = useAxios()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const { authorize } = useContext(AuthContext)

    const login = (evt) => {
        evt.preventDefault()
        setError("")
        
        const form = document.querySelector('#login')
        const username = form[0].value
        const password = form[1].value

        const data = { username, password }
        axios.post('/auth/login', data)
        .then(res => {
            if(res.data.error) return setError(res.data.error);
            setCookie('auth', res.data.accessToken)
            setCookie('ref', res.data.refreshToken)
            authorize()

            const redirect = new URLSearchParams(window.location.search).get('redirect')
            navigate(`${ redirect ? redirect : '/' }`)
        })
        .catch(err => setError(err.response.data.error))
    }
    return (
        <div className="dark:bg-gray-950 bg-slate-100 dark:text-white">
            <ToggleMode/>
            <div className="flex h-svh w-full items-center justify-center font-sora">
                <div className="flex flex-col items-center justify-center py-8 w-[27%] shadow-[0_0_15px_1px] shadow-rose-300 dark:shadow-sky-500 rounded-lg gap-4">
                    <div className="min-h-6 w-[80%] flex">{error && <div className="text-sm px-2 flex items-center justify-center gap-1 text-rose-500 dark:text-white border-2 w-full rounded-md border-rose-400 dark:border-cyan-400 text-wrap"><span className="material-symbols-outlined text-sm">info</span>{error}</div>}</div>

                    <h1 className="text-3xl font-semibold py-3">
                        Login
                    </h1>

                    <form onSubmit={login} id="login" className="flex flex-col text-lg items-center p-2">
                        <input type="text" placeholder="Username" spellCheck="false" autoComplete="off" className="dark:hover:border-sky-400  dark:border-sky-200 dark:focus:border-sky-400 bg-transparent w-full px-2  m-2 outline-none border-b-2  duration-200 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <input type="password" placeholder="Password" spellCheck="false" autoComplete="off" className="dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 bg-transparent w-full px-2 m-2 duration-200 outline-none border-b-2 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <button className="py-1 px-5 dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 dark:hover:bg-sky-400 hover:bg-rose-400 border-2 border-rose-400 rounded-lg w-fit hover:text-white duration-150 my-8">Login</button>
                        <div className="flex flex-row text-sm items-center justify-center gap-2"><p className="">Don&apos;t have an account</p><Link to="/signup" className="hover:underline">Sign Up <span className="material-symbols-outlined text-sm text-center ">open_in_new</span></Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login