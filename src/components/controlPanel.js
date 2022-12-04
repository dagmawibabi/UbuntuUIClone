export const ControlPanel = (props) => {
    return(
        <div>
            <div className={props.status ? "absolute top-10 right-2 ml-80 bg-zinc-900 px-5 py-5 rounded-3xl z-50 text-white border border-zinc-700 cursor-default" : "hidden"}>
                {/* R O U N D E D  */}
                <div className="flex justify-between">
                    <div className="flex justify-start rounded-full px-4 py-2 bg-zinc-800 hover:bg-zinc-700">
                        <img alt="battery" src={require("../assets/icons/half-battery.png")} className="w-4 h-4 mr-2 m-auto" />
                        <span > 64 % </span>
                    </div>
                    <div className="ml-5 flex justify-between">
                        <div className="rounded-full bg-zinc-800 p-3 ml-3 hover:bg-zinc-700">
                            <img alt="icon" src={require("../assets/icons/camera.png")} className="w-4 h-4 m-auto" />
                        </div>
                        <div className="rounded-full bg-zinc-800 p-3 ml-3 hover:bg-zinc-700">
                            <img alt="icon" src={require("../assets/icons/settings.png")} className="w-4 h-4 m-auto" />
                        </div>
                        <div className="rounded-full bg-zinc-800 p-3 ml-3 hover:bg-zinc-700">
                            <img alt="icon" src={require("../assets/icons/padlock.png")} className="w-4 h-4 m-auto" />
                        </div>
                        <div className="rounded-full bg-zinc-800 p-3 ml-3 hover:bg-zinc-700">
                            <img alt="icon" src={require("../assets/icons/power-off.png")} className="w-4 h-4 m-auto" />
                        </div>
                    </div>
                </div>
                {/*  S L I D E R S */}
                <div>
                    <div className="flex justify-between px-4 mt-5">
                        <img alt="icon" src={require("../assets/icons/speaker-filled-audio-tool.png")} className="w-4 h-4 my-auto mr-5" />
                        <input type="range" min={0} max={100} value={80} className="w-full" />
                    </div>
                    <div className="flex justify-between px-4 mt-5">
                        <img alt="icon" src={require("../assets/icons/sunny.png")} className="w-5 h-5 my-auto mr-4" />
                        <input type="range" min={0} max={100} value={45} className="w-full" />
                    </div>
                </div>
                {/*  P I L L S */}
                <div className="mt-5 grid grid-cols-2 justify-between gap-x-3 text-sm">
                    <div className="w-44 bg-violet-400 bg-opacity-20 px-6 py-2 rounded-full mt-3 text-left hover:bg-violet-300 hover:bg-opacity-20 flex justify-start">
                        <img alt="icon" src={require("../assets/icons/wifi.png")} className="w-4 h-4 my-auto mr-2" />
                        <span> Wi-Fi </span>
                    </div>
                    <div className="w-44 bg-zinc-800 px-6 py-2 rounded-full mt-3 text-left hover:bg-zinc-700 flex justify-start">
                        <img alt="icon" src={require("../assets/icons/power-off.png")} className="w-4 h-4 my-auto mr-2" />
                        <span> Bluetooth </span>
                    </div>
                    <div className="w-44 bg-zinc-800 px-6 py-2 rounded-full mt-3 text-left hover:bg-zinc-700 flex justify-start">
                        <img alt="icon" src={require("../assets/icons/download-speed.png")} className="w-4 h-4 my-auto mr-2" />
                        <span> Balanced </span>
                    </div>
                    <div className="w-44 bg-zinc-800 px-6 py-2 rounded-full mt-3 text-left hover:bg-zinc-700 flex justify-start">
                        <img alt="icon" src={require("../assets/icons/sunny.png")} className="w-4 h-4 my-auto mr-2" />
                        <span> Night Light </span>
                    </div>
                    <div className="w-44 bg-violet-400 bg-opacity-20 px-6 py-2 rounded-full mt-3 text-left hover:bg-violet-300 hover:bg-opacity-20 flex justify-start">
                        <img alt="icon" src={require("../assets/icons/dark-mode.png")} className="w-4 h-4 my-auto mr-2" />
                        <span> Dark Mode </span>
                    </div>
                    <div className="w-44 bg-zinc-800 px-6 py-2 rounded-full mt-3 text-left hover:bg-zinc-700 flex justify-start">
                        <img alt="icon" src={require("../assets/icons/airplane.png")} className="w-4 h-4 my-auto mr-2" />
                        <span> Airplane Mode </span>
                    </div>
                    <div className="w-44 bg-zinc-800 px-6 py-2 rounded-full mt-3 text-left hover:bg-zinc-700 flex justify-start">
                        <img alt="icon" src={require("../assets/icons/rotate.png")} className="w-4 h-4 my-auto mr-2" />
                        <span> Auto Rotate </span>
                    </div>
    
                </div>
            </div>
        </div>
    )
}