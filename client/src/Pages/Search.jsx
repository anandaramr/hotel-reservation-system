import Navbar from "../Components/Navbar"

export default function Search()
{
    const roomNo = [850, 524, 678, 308, 107, 791, 686, 732, 723, 354, 630, 785, 265, 999, 301, 924, 290, 333, 258, 509, 791, 499, 246, 143, 501, 302, 538, 292, 203, 358]

    return(
    <div className="bg-[url('./src/assets/back2.jpg')] bg-fixed bg-cover min-h-svh opacity-70">
        <Navbar/>
        <div className="flex justify-center">
            <div className={`bg-white  w-[65%] px-16 py-8 rounded-lg flex flex-col gap-6`}>
                <div className="flex flex-row justify-between w-full ">
                    <div className="flex gap-3 justify-center items-center">
                        <label>From:</label>
                        <input className="outline-none border-2 rounded-md border-gray-600 p-1" type="date" defaultValue={new Date().toISOString().slice(0,10)} name="blah" min = {new Date()}/>
                    </div>
                    <div className="flex gap-3 justify-center items-center">
                        <label>To:</label>
                        <input className="outline-none border-2 rounded-md border-gray-600 p-1" type="date" defaultValue={new Date().toISOString().slice(0,10)} name="blah" min = {new Date()}/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 justify-between font-semibold text-lg">
                        <div className="flex flex-row gap-5 ">
                            <p className="">Single Room</p>
                            <p className="">AC</p>
                        </div>
                        <p className="">₹4000</p>
                    </div>
                    <div className="flex flex-wrap text-lg justify-between px-5">
                        {roomNo.map((item,index)=>
                        <div key={index} className="grid grid-col-2 border-2 my-2 justify-between rounded-lg py-5 px-3 w-[40%] border-gray-950">
                            <p className="p-2 col-start-1">{item}</p>
                            <button className="px-10 py-1 col-start-2 w-fit hover:bg-rose-50 hover:text-black duration-150  rounded-lg border-2 bg-gray-950 border-gray-950 text-white">Book</button>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}