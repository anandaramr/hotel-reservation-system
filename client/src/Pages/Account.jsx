import { useState } from "react"
import Profile from "./Profile"

export default function Account() {
    const [hideName, setHideName] = useState(true)
    const [hideEmail, setHideEmail] = useState(true)
    const [hideGender, setHideGender] = useState(true)
    const [hideAddress, setHideAddress] = useState(true)
    const [hidePhone, setHidePhone] = useState(true)

    return (
        <Profile>
            <div className="bg-[url('./src/assets/assets/back2.png')] bg-cover bg-fixed">
                <div className="min-h-svh flex justify-center">
                    <div className="m-10 bg-gray-100 w-96 flex flex-col p-3 rounded-lg px-16 gap-5">
                        <p className="font-poppins font-semibold text-center text-3xl">User Profile</p>
                        <div className="mb-2 flex flex-row">
                            <p className="">Username:</p>
                            <p className="ml-2 font-semibold text-rose-400">devika</p>
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">Name:</p>
                            <div className="flex items-center">
                                <input type="text" placeholder="Enter your name" value="devika krishnan" disabled={hideName} className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>&nbsp;
                                <button onClick={()=>setHideName(false)}><span className="material-symbols-outlined">edit</span></button>
                            </div>
                        </div>
                        <div className="mb-2 ">
                            <p className="mb-1">Date of birth:</p>
                            <input type="date" defaultValue={new Date().toISOString().slice(0,10)} className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>
                        </div>
                        <div className="mb-2 ">
                            <p className="mb-1">Email:</p>

                            <div className="flex items-center">
                                <input type="email" placeholder="Enter your email " value="dkrishnanm@gmail.com" disabled={hideEmail} className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>
                                <button onClick={()=>setHideEmail(false)}><span className="material-symbols-outlined">edit</span></button>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">Phone number:</p>

                            <div className="flex items-center">
                                <input type="tel" placeholder="Enter your phone no. " value="7592811920" disabled={hidePhone} className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>
                                <button onClick={()=>setHidePhone(false)}><span className="material-symbols-outlined">edit</span></button>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p className="mb-1">Address:</p>

                            <div className="flex items-center">
                                <input placeholder="Enter your address " value="Krishna" disabled={hideAddress} className="mr-2 border-2 border-gray-300 rounded-lg p-2 min-h-5"></input>
                                <button onClick={()=>setHideAddress(false)}><span className="material-symbols-outlined">edit</span></button>
                            </div>
                        </div>
                        <div className="mb-2 ">
                            <p className="mb-1">Gender:</p>
                            
                            <select disabled={hideGender} value="Female" className=" border-gray-300 rounded-lg border-2">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="No">Prefer not to say</option>
                            </select>
                
                        </div>
                        <div className="flex justify-center">
                            <button className="border-2 border-green-500 text-green-500 transition duration-150 hover:bg-green-500 hover:text-white px-4 py-1 w-fit rounded-full ">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </Profile>
    )
}