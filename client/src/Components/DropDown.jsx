import { useState } from "react"

function DropDown({display}) {

    const [counter,setCounter] = useState()
    const [room,setRoom] = useState('Single Room')
    const [ac,setAc] = useState('A/C')
    

    const roomOptions = [
        { text:'Single Room', val:'single' },
        { text:'Double Room', val:'double' },
        { text:'Family', val:'family' },
        { text:'Suite', val:'suite' },
        { text:'Deluxe', val:'deluxe' }
    ]

    const acOptions = [
        { text:'A/C', val:1 },
        { text:'Non A/C', val:0 },
    ]

    function clickRoom(room) {
        setCounter(0)
        setRoom(room.text)
    }

    function clickAc(ac) {
        setCounter(0)
        setAc(ac.text)
    }

    return(
        <div className ="h-[30svh]">
            <div className="border-2 border-white grid grid-cols-5 p-3 text-2xl text-center gap-3 rounded-md h-[10svh] font-amsterdam cursor-default select-none">

                {/* Dropdown 1 */}
                <div className="dropdown col-start-1 col-span-2">
                    <div onClick={()=> setCounter(counter==1 ? 0 : 1)} className="col-start-1 col-span-2 flex flex-row rounded-lg justify-between bg-rose-50 items-center p-2 w-96">
                        <p className="text-center w-full">{room}</p>
                        <span className="material-symbols-outlined text-rose-900 group-hover:text-rose-600">keyboard_double_arrow_down</span>
                    </div>
                    <div  className={` ${counter !=1 && 'scale-y-0 -translate-y-[50%]' } duration-200 rounded-lg my-3 bg-rose-50 py-2`}>
                        {roomOptions.map((item)=><div className="text-center hover:bg-rose-200 my-1" onClick={()=>clickRoom(item)} key={item.val}>{item.text}</div>)}
                    </div>
                </div>
                

                {/* Dropdown 2 */}
                <div className="dropdown col-start-3 col-span-2">
                    <div onClick={()=> setCounter(counter==2 ? 0 : 2)} className="col-start-3 col-span-2 rounded-lg flex flex-row justify-between bg-rose-50 items-center p-2 w-96">
                        <p className="text-center w-full">{ac}</p>
                        <span className="material-symbols-outlined text-rose-900 group-hover:text-rose-600">keyboard_double_arrow_down</span>
                    </div>
                    <div className={` ${counter !=2 && 'scale-y-0 -translate-y-[50%]'} duration-200 rounded-lg my-3 bg-rose-50 py-2`}>
                        {acOptions.map((item)=><div className="text-center hover:bg-rose-200 my-1" onClick={()=>clickAc(item)}  key={item.val}>{item.text}</div>)}
                    </div>
                </div>

                {/* Search */}
                <div className="col-start-5 col-span-1 flex justify-center h-fit">
                    <button onClick={display} className="rounded-xl hover:bg-white hover:text-black text-white  px-8 py-2 duration-150 bg-black">Search</button>
                </div>
            </div>
        </div>
    )
}

export default DropDown