export const ActionBar = () => {
    return (
        <div className="absolute top-10 left-96 ml-52 w-2/5 h-1/2 bg-zinc-900 z-50 text-white px-4 py-4 rounded-2xl">
            <div className="flex justify-start">
                <div>
                <div className="w-96 h-20 bg-zinc-800 rounded-lg mb-3"> </div>
                <div className="w-96 h-20 bg-zinc-800 rounded-lg mb-3"> </div>
                <div className="w-96 h-20 bg-zinc-900 rounded-lg mb-3"> </div>
                <div className="w-96 h-20 bg-zinc-900 rounded-lg mb-3"> </div>
                <div className="w-96 h-12 bg-zinc-900 rounded-lg mb-3"> </div>
                <div className="w-96 h-20 bg-zinc-800 rounded-lg mb-3"> 
                <label className="switch">
                    <input type="checkbox"  />
                    <span className="rounded-full"></span>
                </label>
                </div>
                </div>

                {/* L I N E */}
                <div>

                <div className="h-64 w mx-4 border-l border-zinc-700"></div>
                <div className="h-64 w mx-4 border-l border-zinc-700"></div>

                </div>
                {/* C A L E N D A R */}
                <div>
                    <div className="w-80 h-20  rounded-lg mb-3 text-start pl-1 pt-2 text-zinc-500 ">
                        <span className="block text-lg"> Monday </span>
                        <span className="block text-2xl"> December 5 2022 </span>
                    </div>
                    <div className="w-80 h-20 bg-zinc-900 rounded-lg text-left pl-5 pt-2 mb-3"> </div>
                    <div className="w-80 h-20 bg-zinc-900 rounded-lg text-left pl-5 pt-2 mb-3"> </div>
                    <div className="w-80 h-20 bg-zinc-900 rounded-lg text-left pl-5 pt-2 mb-3"> </div>
                    <div className="w-80 h-12 bg-zinc-900 rounded-lg text-left pl-5 pt-2 mb-3"> </div>
                    <div className="w-80 h-20 bg-zinc-800 rounded-lg text-left pl-5 pt-2">
                        <span className="block text-base text-zinc-500 mb-1"> Today </span>
                        <span className="block text-base"> No Events </span>
                    </div>
                </div>
            </div>
        </div>
    )
}