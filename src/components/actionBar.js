export const ActionBar = (props) => {
    return (
        <div className={props.status ? "absolute top-10 left-96 ml-52 w-2/5 h-1/2 bg-zinc-900 z-50 text-white px-4 py-4 rounded-2xl cursor-default" : "hidden"}>
            <div className="flex justify-start">
                <div>
                {/* M U S I C */}
                <div className="w-96 h-20 bg-zinc-800 rounded-lg mb-3 p-2 flex justify-between hover:bg-zinc-700">
                    <div className="flex justify-start ">
                        <div className="mr-4">
                            <img alt="albumArt" src={require("../assets/images/dermotkennedy.jpeg")} className="w-16 rounded-md" />
                        </div>
                        <div className="text-left my-auto">
                            <span className="block "> Kiss Me  </span>
                            <span className="block text-base text-gray-400"> Dermot Kennedy </span>
                        </div>
                    </div>
                    <div className="flex justify-between w-32 my-auto px-3 ">
                        <img alt="icon" src={require("../assets/icons/rewind-sign.png")} className="w-3 h-3" />
                        <img alt="icon" src={require("../assets/icons/play.png")} className="w-3 h-3" />
                        <img alt="icon" src={require("../assets/icons/fast-forward-button.png")} className="w-3 h-3" />
                    </div>
                </div>
                {/* S C R E E N S H O T */}
                <div className="w-96 h-20 bg-zinc-800 rounded-lg mb-3 p-2 flex justify-between hover:bg-zinc-700"> 
                    <div className="flex justify-start ">
                        <div className="mr-4 flex">
                            <img alt="albumArt" src={require("../assets/images/screenshot.png")} className="w-16 rounded-md my-auto" />
                        </div>
                        <div className="text-left my-auto">
                            <span className="block pb-1"> Screenshot Captured  </span>
                            <span className="block text-sm text-gray-400"> You can paste the image from the clipboard </span>
                        </div>
                    </div>
                </div>
                {/* S Y S T E M */}
                <div className="w-96 h-20 bg-zinc-800 rounded-lg mb-3 p-2 flex justify-between hover:bg-zinc-700"> 
                    <div className="flex justify-start ">
                        <div className="mr-4 ml-2 flex">
                            <img alt="albumArt" src={require("../assets/icons/transfer.png")} className="w-14 h-12 rounded-md my-auto" />
                        </div>
                        <div className="text-left my-auto">
                            <span className="block pb-1"> Authentication Required </span>
                            <span className="block text-sm text-gray-400"> Password or encryption keys are required ... </span>
                        </div>
                    </div>
                </div>
                
                {/* D I S T U R B */}
                <div className="w-96 h-12 bg-zinc-900 rounded-lg mb-3 flex justify-between py-1 pr-1 absolute bottom-1">
                    <div className="flex justify-start text-left px-4">
                        <span className="pr-4 my-auto"> Do Not Disturb </span>
                        <input type="checkbox" className="toggle my-auto" checked={false} />
                    </div> 
                    <div className="button bg-zinc-800 rounded-xl px-7 flex hover:bg-zinc-700">
                        <span className="my-auto text-stone-200"> Clear </span> 
                    </div>
                </div>
                </div>

                {/* L I N E */}
                <div>

                <div className=" w mx-4 border-l border-zinc-700 absolute bottom-4 top-4"></div>
                {/* <div className="h-60 w mx-4 border-l border-zinc-700"></div> */}

                </div>
                {/* C A L E N D A R */}
                <div className="absolute top-4 bottom-0 left-96 ml-12">
                    <div className="w-80 h-20  rounded-lg mb-3 text-start pl-1 pt-2 text-zinc-500 absolute top-0">
                        <span className="block text-lg"> Monday </span>
                        <span className="block text-2xl"> December 5 2022 </span>
                    </div>
                    <div className="w-80 h-16 bg-zinc-800 rounded-lg text-left pl-5 py-1 hover:bg-zinc-700 absolute bottom-4">
                        <span className="block text-base text-zinc-500"> Today </span>
                        <span className="block text-base"> No Events </span>
                    </div>
                </div>
            </div>
        </div>
    )
}