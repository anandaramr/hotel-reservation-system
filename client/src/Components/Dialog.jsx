
export default function Dialog({ msg, show, setShow, action, submit }) {

    return (
        <div>
            {show && <div className="bg-black bg-opacity-70 absolute z-50 top-0 left-0 h-svh w-full flex justify-center items-center select-none">
                <div className="w-96 bg-gray-300 flex flex-col p-3 items-center rounded-lg">
                    <span className="w-full px-3 my-5 font-medium">{msg}</span>
    
                    <div className="w-full flex justify-end items-center py-3">
                        <button onClick={() => setShow(false)} className="px-3 py-1 h-fit border-2 border-black rounded-md hover:bg-black hover:text-gray-300 mx-3 duration-150">Cancel</button>
                        <button onClick={() => {submit(); setShow(false)}} className="px-4 py-2 border-2 border-rose-500 hover:bg-rose-500 rounded-md text-rose-500 font-medium hover:text-gray-300 mx-3 duration-150">{action}</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}