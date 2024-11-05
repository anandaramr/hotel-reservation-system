import { useContext, useEffect, useState } from "react"
import Dropdown from "../Components/DropDown.jsx"
import Navbar from "../Components/Navbar.jsx"
import { axiosJwt, useAxios } from "../../Auth/axios.js"
import AuthContext from "../../Auth/AuthContext.jsx"

function Home() {

    const [ ,setHide ] = useState("hidden")
    const [ myReview, setMyReview ] = useState()
    const [ reviewList, setReviewList ] = useState([])
    const [ posted, setPosted ] = useState(false)
    const axios = useAxios()
    const { user, isLoading } = useContext(AuthContext)

    useEffect(() => {
        axios.get('/user/review')
        .then(res => {
            setReviewList(res.data)
        })
    }, [])

    useEffect(() => {
        axios.get('/user/review/' + user?.userId)
        .then(res => {
            setMyReview(res.data.text)
        })
    }, [user])

    const post = (evt) => {
        evt.preventDefault()
        const data = { text: evt.target[0].value }
        axiosJwt.post('/user/review', data)
        .then(() => {
            setPosted(true)
            setTimeout(() => setPosted(false), 3000)
        })
    }

    return(
        <div className="bg-black">
            <div className="bg-[url('./src/assets/back2.png')] bg-fixed bg-cover min-h-svh opacity-70 flex flex-col justify-center ">

                <Navbar/>
                <div className="h-svh">
                    <div className="flex flex-col gap-8 justify-center items-center m-10">
                        <p className="text-9xl font-semibold text-rose-100 drop-shadow-xl font-monte-carlo">A Journey in Every Stay</p>
                        <p className="text-4xl mt-16 p-1 text-white font-semibold font-poppins text-center rounded-lg">Book a Room</p>

                        <Dropdown display={()=>setHide("")}/>
                    <span className="material-symbols-outlined mt-5 text-white text-center text-7xl select-none">keyboard_arrow_down</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-20 mb-10">
                    <h3 className="text-5xl text-white text-center font-semibold select-none">Reviews</h3>
                    {!isLoading && user && <div className="bg-opacity-50 flex justify-center items-center gap-4 mb-10 rounded-xl bg-white w-[35%] py-5 px-3 flex-col">
                        <p className="text-3xl text-semibold text-center select-none">Your review</p>
                        <form onSubmit={post} className="flex flex-col items-center gap-5">
                            <textarea defaultValue={myReview} className="border-2 min-h-32 p-3 outline-none min-w-96 resize-y bg-transparent rounded-xl border-gray-700"/>
                            <button className={`rounded-lg select-none w-fit ${ posted ? 'border-2 border-emerald-300 bg-emerald-500' : 'bg-gray-950 hover:bg-white hover:text-black'} text-white px-5 py-2 text-xl duration-150`}>{ posted ? "Posted!" : 'Post'}</button>
                        </form>
                    </div>}
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
