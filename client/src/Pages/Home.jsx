import { useContext, useEffect, useState } from "react"
import Dropdown from "../Components/DropDown.jsx"
import Navbar from "../Components/Navbar.jsx"
import { useAxios } from "../../Auth/axios.js"
import AuthContext from "../../Auth/AuthContext.jsx"

function Home() {

    const [hide,setHide] = useState("hidden")
    const [ reviewList, setReviewList ] = useState([])
    const axios = useAxios()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get('/user/review')
        .then(res => {
            console.log(res)
            setReviewList(res.data)
        })
    }, [])

    return(
        <div className="bg-black">
            <div className="bg-[url('./src/assets/back2.png')] bg-fixed bg-cover min-h-svh opacity-70 flex flex-col justify-center ">

                <Navbar/>
                <div className="h-svh">
                    <div className="flex flex-col gap-8 justify-center items-center m-10">
                        <p className="text-9xl font-semibold text-rose-100 drop-shadow-xl font-monte-carlo">A Journey in Every Stay</p>
                        <p className="text-4xl mt-16 p-1 text-white font-semibold font-poppins text-center rounded-lg">Book a Room</p>

                        <Dropdown display={()=>setHide("")}/>
                    <span className="material-symbols-outlined mt-5 text-white text-center text-7xl">keyboard_arrow_down</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-20">
                    <h3 className="text-5xl text-white text-center font-semibold select-none">Reviews</h3>
                    <div className="bg-opacity-50 flex justify-center items-center gap-4 mb-10 rounded-xl bg-white w-[35%] py-5 px-3 flex-col">
                        <p className="text-3xl text-semibold text-center">Your review</p>
                        <textarea autoFocus className="border-2 min-h-32 p-3 outline-none min-w-96 resize-y bg-transparent rounded-xl border-gray-700"/>
                        <button className="rounded-lg bg-gray-950 text-white px-5 py-2 text-xl">Post</button>
                    </div>
                    <div className="flex gap-10 flex-wrap justify-center items-center w-[80%]">
                        {reviewList.length<=0 && <p className="text-3xl text-semibold text-white">No reviews yet !!!</p>}
                        {reviewList.length>0 && reviewList.map((item,index)=>
                        <div key={index} className="bg-white p-3 rounded-lg h-32 w-72 flex flex-col gap-2 ">
                            <p className="font-semibold">{item.username}</p>
                            <p className="italics text-sm line-clamp-3">&quot;{item.text}&quot;</p>
                            <p className="text-sm text-right">{item.date}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
