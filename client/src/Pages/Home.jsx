
import Dropdown from "../Components/Dropdown.jsx"
import Navbar from "../Components/Navbar.jsx"

function Home()
{
    return(
        <div className="bg-black select-none font-poppins">
            <div className="bg-[url('./src/assets/back2.jpg')] bg-fixed bg-cover min-h-svh opacity-70 flex flex-col ">
                <Navbar/>
                <div className="flex flex-col gap-8 justify-center items-center m-10 ">
                    <p className="text-8xl font-semibold text-wrap text-rose-100 drop-shadow-xl font-monte-carlo">Discover Tranquility, Embrace Comfort</p>
                    <p className="text-5xl mt-9 p-2 text-white font-semibold text-center rounded-lg">Book a Room</p>
                    <Dropdown display/>
                    
                </div>
            </div>
        </div>
    )
}
export default Home
