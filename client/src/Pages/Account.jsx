import Profile from "./Profile"

export default function Account()
{
    return(
    <Profile>
        <div className="bg-[url('./src/assets/assets/back2.png')] bg-cover bg-fixed">
            <div className="min-h-svh flex justify-center">
                <div className="m-10 bg-gray-100 w-fit flex flex-col p-3 rounded-lg px-16 gap-5">
                    <p className="font-poppins font-semibold text-center text-3xl">User Profile</p>
                    <div className="mb-2">
                        <p className="mb-1">Username:</p>
                        <p></p>
                    </div>
                    <div className="mb-2">
                        <p className="mb-1">Name:</p>
                        <input type="text" placeholder="Enter your name " className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>&nbsp;
                    </div>
                    <div className="mb-2">
                        <p className="mb-1">Date of birth:</p>
                        <input type="date" defaultValue={new Date().toISOString().slice(0,10)} className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>
                    </div>
                    <div className="mb-2">
                        <p className="mb-1">Email:</p>
                        <input type="email" placeholder="Enter your email " className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>
                    </div>
                    <div className="mb-2">
                        <p className="mb-1">Phone number:</p>
                        <input type="tel" placeholder="Enter your phone no. " className="mr-2 border-2 border-gray-300 rounded-lg p-2"></input>
                    </div>
                    <div className="mb-2">
                        <p className="mb-1">Address:</p>
                        <input placeholder="Enter your address " className="mr-2 border-2 border-gray-300 rounded-lg p-2 min-h-5"></input>
                    </div>
                    <div className="mb-2">
                        <p className="mb-1">Gender:</p>
                        <select className=" border-gray-300 rounded-lg border-2">
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

