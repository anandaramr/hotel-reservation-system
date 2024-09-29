import { useEffect, useState } from "react"

function DropDown()
{
    const [counter,setCounter] = useState()
    const [room,setRoom] = useState('Single Room')
    const [ac,setAc] = useState('A/C')

    useEffect(()=>{
        console.log(counter)
    },[counter])

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
        <div className="border-2 border-white p-2 rounded-lg select-none text-lg grid grid-cols-3">
                <div className="col-start-1">
                    <div onClick={()=>(counter !=1 && setCounter(1))} className={`min-w-[30%] bg-orange-100 flex flex-row items-center justify-center py-2 col-start-1 ${counter==1 && 'absolute'}`}>
                        <div className="flex flex-col">
                            <div className="flex flex-row px-4 py-2 group">
                                <p className="text-center w-96 text-gray-800">{room}</p>
                                <span className="material-symbols-outlined text-rose-900 group-hover:text-rose-600">keyboard_double_arrow_down</span>
                            </div>
                            <div className={`text-center bg-white ${counter!=1 && 'hidden'}`}>
                                {roomOptions.map((room)=><div onClick={()=>clickRoom(room)} className="hover:bg-orange-200" key={room.val}>{room.text}</div>)}
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col-start-2">
                    <div onClick={()=>counter !=2 && setCounter(2)} className={` min-w-[30%] bg-orange-100 flex flex-row items-center justify-center py-2  ${counter==2 && 'absolute'}`}>
                        <div className="flex flex-col">
                            <div className="flex flex-row px-4 py-2 group">
                                <p className="text-center w-96 text-gray-800 hover:text-black">{ac}</p>
                                <span className="material-symbols-outlined text-rose-900 group-hover:text-rose-600">keyboard_double_arrow_down</span>
                            </div>
                            <div className={`${counter!=2 && 'hidden'} text-center bg-white`}>
                            {acOptions.map((ac)=><div onClick={()=>clickAc(ac)} className="hover:bg-orange-200" key={ac.val}>{ac.text}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-xl px-10 py-3 w-fit h-fit rounded-lg bg-orange-950 text-white hover:bg-white hover:text-orange-950">Search</button>
                </div>
        </div>
        </>
    )
}
export default DropDown