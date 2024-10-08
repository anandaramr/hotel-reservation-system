import { axiosJwt } from "../../Auth/axios"
import Profile from "./Profile"
import { useEffect } from "react"
import { useState } from "react"

export default function Orders()
{
    const [order,setOrder]= useState()

    useEffect(()=>{
        axiosJwt.get("/room/orders")
        .then(
            res=> setOrder(res.data)
        )
    },[])

    function isExpired(item)
    {
        const currentDate= new Date().toISOString().slice(0,10)
        if(item.expiryDate< currentDate || item.cancelled != null)
            return true
        return false
       
    }

    function cancel(item)
    {
        axiosJwt.post(`/room/cancel/${item.orderId}`)
        .then(() => setOrder(o=> {
            return o.map(i => {
                if(i == item) return {...item, cancelled: true }
                return i
            })
        }))

    }
    
    return(
    <Profile>
        <div className="flex justify-center w-full items-center min-h-svh flex-col ">
        {/* Each order */}
            {order?.map((item,index)=><div key={index} className="border-2 border-gray-500 duration-200 bg-gray-200 hover:bg-white rounded-lg w-[90%] flex justify-between items-center m-3 p-7">
                <div className="flex justify-between flex-col gap-3">
                    <p className="text-5xl">{item.roomNo}</p>
                    <div className="flex items-center text-gray-500">
                        <div className="flex gap-2">
                            <p className="">{item.startDate}</p>
                            <p>-</p>
                            <p className="">{item.expiryDate}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-10">
                    <p className="text-2xl">₹{item.totalPrice}</p>
                    <button disabled={isExpired(item)} onClick={()=>cancel(item)} className="disabled:border-gray-600 disabled:text-gray-600 disabled:hover:bg-transparent px-6 h-fit py-2 border-2 duration-150 border-rose-500 text-rose-500 rounded-lg text-xl hover:bg-rose-500 hover:text-white ">{isExpired(item)?'Expired':'Cancel'}</button>
                </div>

            </div>)}
        </div>
    </Profile>
    )
}