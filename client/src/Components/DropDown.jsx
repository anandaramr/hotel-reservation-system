import { useState } from "react"

function DropDown()
{
    const [counter,setCounter] = useState()
    const [room,setRoom] = useState('Single Room')
    const [ac,setAc] = useState('A/C')

    const roomOptions = [
        {text:'Single Room',val:'single'},
        {text:'Double Room',val:'double'},
        {text:'Family',val:'family'},
        {text:'Suite',val:'suite'},
        {text:'Deluxe',val:'deluxe'}
    ]

    const acOptions = [
        {text:'A/C',val:1},
        {text:'Non A/C',val:0},
    ]

    function clickRoom(room)
    {
        setCounter(0)
        setRoom(room.text)
    }

    function clickAc(ac)
    {
        setCounter(0)
        setAc(ac.text)
    }
    
    return(
        <>
            <div className="border-2 border-white grid grid-cols-5 p-3 text-xl gap-3 rounded-md h-[10svh] cursor-default select-none">

                {/* Dropdown 1 */}
                <div className="col-start-1 col-span-2 ">
                    <div onClick={()=> setCounter(1)} className="col-start-1 col-span-2 flex flex-row rounded-lg justify-between bg-orange-100 items-center p-2 w-96">
                        <p className="text-center w-full">{room}</p>
                        <span className="material-symbols-outlined text-rose-900 group-hover:text-rose-600">keyboard_double_arrow_down</span>
                    </div>
                    <div  className={` ${counter !=1 && 'hidden'} rounded-lg my-3 bg-orange-100 py-2`}>
                        {roomOptions.map((item)=><div className="text-center hover:bg-orange-200 my-1" onClick={()=>clickRoom(item)} key={item.val}>{item.text}</div>)}
                    </div>
                </div>
                

                {/* Dropdown 2 */}
                <div className="col-start-3 col-span-2">
                    <div onClick={()=> setCounter(2)} className="col-start-3 col-span-2 rounded-lg flex flex-row justify-between bg-orange-100 items-center p-2 w-96">
                        <p className="text-center w-full">{ac}</p>
                        <span className="material-symbols-outlined text-rose-900 group-hover:text-rose-600">keyboard_double_arrow_down</span>
                    </div>
                    <div className={` ${counter !=2 && 'hidden'} rounded-lg my-3 bg-orange-100 py-2`}>
                        {acOptions.map((item)=><div className="text-center hover:bg-orange-200 my-1" onClick={()=>clickAc(item)}  key={item.val}>{item.text}</div>)}
                    </div>
                </div>
                {/* Search */}
                <div className="col-start-5 col-span-1 flex justify-center h-fit">
                    <button className="rounded-xl hover:bg-rose-900 text-white px-7 py-2 duration-150 bg-rose-950">Search</button>
                </div>
            </div>
        </>
    )
}
export default DropDown