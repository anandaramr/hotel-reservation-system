function ToggleMode()
{
    function toggleTheme()
    {
        localStorage.dark=localStorage.dark == 'true' ? 'false' : 'true'
        document.documentElement.classList.toggle("dark")
    }
    return(
        <div>
            <button onClick={toggleTheme}><span className="material-symbols-outlined hidden absolute right-0 p-3 text-3xl dark:block text-white">light_mode</span></button>
            <button onClick={toggleTheme}><span className="material-symbols-outlined absolute right-0 p-3 text-3xl dark:hidden ">dark_mode</span></button>
        </div>
    )
}
export default ToggleMode