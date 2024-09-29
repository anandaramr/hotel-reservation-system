import Dropdown from "../Components/DropDown.jsx"
import Navbar from "../Components/Navbar.jsx"

function Home()
{
    return(
        <div className="bg-black">
            <div className="bg-[url('./src/assets/back.jpeg')] bg-fixed bg-cover min-h-svh opacity-70 flex flex-col ">
                <Navbar/>
                <div className="flex flex-col gap-5 justify-center items-center m-10">

                    <p className="text-3xl text-white w-60 text-center rounded-lg">Book a Room</p>
                    <Dropdown/>
                    {/* <div className="flex flex-row p-2 gap-4 w-full justify-center items-center">
                        <div className="border-2 border-white rounded-lg p-2 flex gap-2 text-orange-950">
                            <select name = "room-type" className="w-96  text-center h-12 text-xl rounded-lg outline-none " >
                                <option value="single" className="">Single Room</option>
                                <option value="double" className="">Double Room</option>
                                <option value="family" className="">Family</option>
                                <option value="suite" className="">Suites</option>
                                <option value="deluxe" className="">Deluxe</option>
                            </select>
                            <select name = "A/C preferences" className="w-96 text-center h-12 text-xl rounded-lg outline-none border-r-2" >
                                <option value="ac" className="">A/C</option>
                                <option value="non-ac">non A/C</option>
                            </select>
                            <button className="text-xl px-5 py-2 rounded-lg bg-orange-950 text-white hover:bg-white hover:text-orange-950">Search</button>
                        </div>
                    </div> */}

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home