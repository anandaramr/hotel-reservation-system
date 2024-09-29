import { Link } from "react-router-dom"
function Navbar()
{
    return(
        <div className="flex flex-row justify-between p-5 select-none">
            <p className="font-sora text-5xl text-white font-bold">Serene</p>
            <div className="flex flex-row  font-sora items-center gap-3 font-medium">
                <Link to="/login" className="duration-150 hover:bg-black border-2 flex items-center px-4 h-fit py-1 border-black hover:text-white rounded-md"><span>Login</span></Link>
                <Link to="/signup" className="duration-150 bg-white hover:bg-black border-2 flex items-center px-5 h-fit py-2 border-white hover:border-black hover:text-white rounded-lg">Sign Up</Link>
            </div>
        </div>
    )
}
export default Navbar