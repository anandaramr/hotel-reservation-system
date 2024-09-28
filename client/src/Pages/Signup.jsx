function Signup()
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
            <div className="flex h-svh w-full items-center justify-center font-sora ">
                <div className="flex flex-col items-center justify-center py-10 px-20 shadow-[0_0_15px_1px] shadow-rose-300 dark:shadow-sky-500 rounded-lg gap-4">
                    <h1 className="text-3xl font-semibold py-3">
                        Sign Up
                    </h1>
                    <form className="flex flex-col text-lg items-center p-2">
                        <input type="text" placeholder="Password" className="bg-transparent w-full dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 px-2 m-2 duration-200 outline-none border-b-2 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <input type="text" placeholder="Username" className="bg-transparent w-full dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 px-2 m-2 outline-none border-b-2  duration-200 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <input type="text" placeholder="Confirm Password" className="bg-transparent dark:hover:border-sky-400 dark:border-sky-200 dark:focus:border-sky-400 w-full px-2  duration-200 m-2 outline-none border-b-2 focus:border-rose-400 border-b-rose-200 hover:border-red-400"/>
                        <button className="py-1 px-5  hover:bg-rose-400 border-2 dark:hover:bg-sky-400 dark:border-sky-400  border-rose-400 rounded-lg w-fit hover:text-white my-8">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup