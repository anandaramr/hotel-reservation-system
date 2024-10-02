import { Link } from "react-router-dom"
import AuthContext from "../../Auth/AuthContext.jsx"
import { useContext, useEffect } from "react"

function Navbar()
{
    const {user,isLoading,authorize}=useContext(AuthContext)
    useEffect(()=>{
        authorize()
    },[])
    return(
        <div className="sticky top-0">
            {!isLoading && <div className="flex flex-row justify-between p-5 select-none">
                <p className="font-sora text-5xl text-white font-semibold">Serene</p>
                <div className="flex flex-row  font-sora items-center gap-3 font-medium">
                    {!user && <Link to="/login" className="duration-150 hover:bg-black border-2 flex items-center px-4 h-fit py-1 border-black hover:text-white rounded-md"><span>Login</span></Link>}
                    {!user && <Link to="/signup" className="duration-150 bg-white hover:bg-black border-2 flex items-center px-5 h-fit py-2 border-white hover:border-black hover:text-white rounded-lg">Sign Up</Link>}
                    {user && <Link to="/profile"><span className="material-symbols-outlined [font-variation-settings:'FILL'_1] text-white text-4xl">account_circle</span></Link>}
                    {/* {user && <button onClick={logout}>Logout</button>} */}
                </div>
            </div>}
            {isLoading && <p className="text-5xl text-center w-full text-white my-20">Loading</p>}
        </div>
    )
}
export default Navbar