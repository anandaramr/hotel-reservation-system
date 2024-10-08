import Navbar from "../Components/Navbar"

function Profile({ children })
{
    return(
        <div className="bg-[url('./src/assets/back2.jpg')] bg-fixed bg-cover min-h-svh opacity-70 ">
        <Navbar/>
            { children }
        </div>
    )
}
export default Profile