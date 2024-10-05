import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import { useAxios } from "../../Auth/axios"
import DropDown from "../Components/DropDown"

export default function Search() {

    const axios = useAxios()
    const [ rooms, setRooms ] = useState([])
    const [ start, setStart ] = useState(new Date().toISOString().slice(0,10))
    const [ expiry, setExpiry ] = useState(new Date().toISOString().slice(0,10))
    
    const urlParams = new URLSearchParams(window.location.search)
    const [ roomType, setRoomType ] = useState(urlParams.get('roomType'))
    const [ isAc, setIsAc ] = useState(urlParams.get('isAc'))
    
    useEffect(() => {
        submit()
    }, [start, expiry])

    function submit() {
        if(expiry<start) return setRooms([]);
        
        axios.get(`/room/search?roomType=${roomType}&isAc=${isAc}&start=${start}&expiry=${expiry}`)
        .then(res => {
            setRooms(res.data)
        })
    }

    return(
        <div className="bg-[url('./src/assets/back2.png')] bg-fixed bg-cover min-h-svh opacity-70 pb-16">
            <Navbar/>

            <div className="flex justify-center mt-5 mb-48 h-fit">
                    <DropDown defaultRoomType={roomType} defaultIsAc={isAc} setRoomType={setRoomType} setIsAc={setIsAc} submit={submit} />
            </div>

            <div className="flex justify-center">
                <div className={`bg-white  w-[65%] px-16 py-8 rounded-lg flex flex-col gap-10`}>
                    <div className="flex flex-row justify-between w-full ">

                        <div className="flex gap-3 justify-center items-center">
                            <label>From:</label>
                            <input onChange={(evt) => setStart(evt.target.value)} className="outline-none border-2 rounded-md border-gray-600 p-1" id="start" type="date" defaultValue={new Date().toISOString().slice(0,10)} name="blah" min = {new Date().toISOString().slice(0,10)} />
                        </div>

                        <div className="flex gap-3 justify-center items-center">
                            <label>To:</label>
                            <input onChange={(evt) => setExpiry(evt.target.value)} className="outline-none border-2 rounded-md border-gray-600 p-1" id="expiry" type="date" defaultValue={new Date().toISOString().slice(0,10)} name="blah" min = {new Date().toISOString().slice(0,10)}/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap text-lg justify-between px-5">

                            {rooms.map((item,index)=>
                            <div key={index} className="group grid grid-col-3 border-2 my-2 justify-between items-center rounded-lg py-5 px-3 w-[45%] border-gray-950">
                                <div className="col-start-1 flex flex-col items-center gap-1 self-end translate-y-5 scale-125 group-hover:scale-100 group-hover:translate-y-0 duration-300">
                                    <p className="px-2 font-bold">{item.roomNo}</p>
                                    <div className="flex scale-0 group-hover:scale-90 duration-300 cursor-default select-none gap-1">
                                        <span className="text-xs border-2 border-gray-950 rounded-full py-1 px-2 hover:bg-rose-50 duration-200">{item.roomType}</span>
                                        <span className="text-xs border-2 border-gray-950 rounded-full py-1 px-2 hover:bg-rose-50 duration-200">{item.isAc==1 ? "AC" : "non-AC"}</span>
                                    </div>
                                </div>
                                <p className="p-2 col-start-2 text-xl">₹{item.totalPrice}</p>
                                <button className="px-6 py-2 col-start-3 w-fit h-fit select-none hover:bg-rose-50 hover:text-black duration-150  rounded-lg border-2 bg-gray-950 border-gray-950 text-white">Book</button>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}