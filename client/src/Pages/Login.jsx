import { Link } from "react-router-dom"

function Login()
{
    function mode()
    {
        localStorage.dark=localStorage.dark == 'true' ? 'false' : 'true'
        document.documentElement.classList.toggle("dark")
    }
    return(
        <div className="dark:bg-gray-950 bg-slate-100 dark:text-white">
            <button onClick={mode}><span className="material-symbols-outlined hidden absolute right-0 p-3 text-3xl dark:block text-white">light_mode</span></button>
            <button onClick={mode}><span className="material-symbols-outlined absolute right-0 p-3 text-3xl dark:hidden ">dark_mode</span></button>
            <div className="flex h-svh w-full items-center justify-center font-sora">
                <div className="flex flex-col items-center justify-center py-10 px-20 shadow-[0_0_15px_1px] shadow-rose-300 dark:shadow-sky-500 rounded-lg gap-4">
                    <h1 className="text-3xl font-semibold py-3">
                        Login
                    </h1>
                    <form className="flex flex-col text-lg items-center p-2">
                        <input type="text" placeholder="Username" className="dark:hover:border-sky-400  dark:border-sky-200 dark:focus:border-sky-400 bg-transparent w-full px-2  m-2 outline-none border-b-2  duration-200 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <input type="text" placeholder="Password" className="dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 bg-transparent w-full px-2 m-2 duration-200 outline-none border-b-2 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <button className="py-1 px-5 dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 dark:hover:bg-sky-400 hover:bg-rose-400 border-2 border-rose-400 rounded-lg w-fit hover:text-white my-8">Login</button>
                        <div className="flex flex-row text-sm items-center justify-center gap-2"><p className="">Don&apos;t have an account</p><Link to="/signup" className="hover:underline">Sign Up <span className="material-symbols-outlined text-sm text-center ">open_in_new</span></Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login