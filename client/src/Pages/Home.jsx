import Dropdown from "../Components/DropDown.jsx"
import Navbar from "../Components/Navbar.jsx"

function Home()
{
    return(
        <div className="bg-black">
            <div className="bg-[url('./src/assets/back.jpeg')] bg-fixed bg-cover min-h-svh opacity-70 flex flex-col ">
                <Navbar/>
                <div className="flex flex-col gap-5 justify-center items-center m-10">
                    <p className="text-5xl text-white font-semibold text-center rounded-lg">Book a Room</p>
                    <Dropdown/>
                </div>
            <div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home