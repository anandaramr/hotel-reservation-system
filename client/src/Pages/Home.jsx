import { useState } from "react"
import Dropdown from "../Components/DropDown.jsx"
import Navbar from "../Components/Navbar.jsx"

function Home() {

    const [hide,setHide] = useState("hidden")

    const reviews = [
        {
            name: "Alice Johnson",
            date: "2024-10-21",
            text: "Great service and fast delivery. Product quality is as promised. Very satisfied!"
        },
        {
            name: "Michael Smith",
            date: "2024-09-15",
            text: "Not quite what I expected. The item had some minor issues, but customer support was helpful."
        },
        {
            name: "Priya Patel",
            date: "2024-08-30",
            text: "Excellent! The product is fantastic, and the packaging was top-notch. Will order again."
        },
        {
            name: "David Lee",
            date: "2024-07-12",
            text: "Good value for money, though shipping took a bit longer than expected. Overall, a decent purchase."
        },
    ];
    

    return(
        <div className="bg-black select-none">
            <div className="bg-[url('./src/assets/back2.png')] bg-fixed bg-cover min-h-svh opacity-70 flex flex-col justify-center">

                <Navbar/>
                <div className="flex flex-col gap-8 justify-center items-center m-10">
                    <p className="text-9xl font-semibold text-rose-100 drop-shadow-xl font-monte-carlo">A Journey in Every Stay</p>
                    <p className="text-4xl mt-16 p-1 text-white font-semibold font-poppins text-center rounded-lg">Book a Room</p>

                    <Dropdown display={()=>setHide("")}/>
                </div>
                <h3 className="text-5xl text-white text-center my-16 font-semibold ">Reviews</h3>
                <div className="flex gap-5 flex-wrap justify-center items-center">
                    {reviews.map((item,index)=>
                    <div key={index} className="bg-white p-3 rounded-lg w-72 justify-center flex flex-col gap-2 ">
                        <p className="font-semibold">{item.name}</p>
                        <p className="italics text-sm line-clamp-3">"{item.text}"</p>
                        <p className="text-sm text-right">{item.date}</p>
                    </div>)}
                </div>
                <span className="material-symbols-outlined my-10 text-white text-center text-5xl">keyboard_arrow_down</span>
            </div>
        </div>
    )
}
export default Home
