import { useState } from "react"
import Dropdown from "../Components/Dropdown.jsx"
import Navbar from "../Components/Navbar.jsx"

function Home()
{
    const [hide,setHide] = useState("hidden")
    return(
        <div className="bg-black select-none">
            <div className="bg-[url('./src/assets/back2.jpg')] bg-fixed bg-cover min-h-svh opacity-70 flex flex-col ">
                <Navbar/>
                <div className="flex flex-col gap-8 justify-center items-center m-10 ">
                    <p className="text-8xl font-semibold text-wrap text-rose-100 drop-shadow-xl font-monte-carlo">Discover Tranquility, Embrace Comfort</p>
                    <p className="text-5xl mt-9 p-2 text-white font-semibold font-teko text-center rounded-lg">Book a Room</p>
                    <Dropdown display={()=>setHide("")}/>
                    <div className={`bg-white ${hide} w-[65%] p-5 rounded-lg flex flex-col flex-wrap `}>
                        <div className="flex flex-row justify-between gap-2 w-full ">
                            <div className="flex gap-3 justify-center items-center">
                                <label>From:</label>
                                <input className="outline-none border-2 rounded-md border-rose-200 p-1" type="date" value={new Date().toISOString().slice(0,10)} name="blah" min = {new Date()}/>
                            </div>
                            <div className="flex gap-3 justify-center items-center">
                                <label>To:</label>
                                <input className="outline-none border-2 rounded-md border-rose-200 p-1" type="date" value={new Date().toISOString().slice(0,10)} name="blah" min = {new Date()}/>
                            </div>
                        </div>
                        <p className="">₹4000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
