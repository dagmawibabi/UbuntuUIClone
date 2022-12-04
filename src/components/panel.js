// import volumeIcon from '../assets/icons/audio-volume-high-panel.svg';

export const Panel = (props) => {
    function setControlPanelActive(){
        props.setControlPanelActive(!props.controlPanelStatus)
    }
    function setActionBarActive(){
        props.setActionBarActive(!props.actionBarStatus)
    }
    return (
        <div className="bg-zinc-900 flex justify-between text-white px-4 py-1">
            <div className="hover:bg-zinc-800 px-4 rounded-full cursor-default">
                <span> Activities </span> 
            </div>
            <div  className="hover:bg-zinc-800 px-4 rounded-full cursor-default" onClick={setActionBarActive}>
                <span> Dec 4 16:58 </span> 
            </div>
            <div className="flex justify-between hover:bg-zinc-800 px-4 rounded-full cursor-default" onClick={setControlPanelActive}>
                {/*  */}
                {/* speaker-filled-audio-tool */}
                <img alt="battery" src={require("../assets/icons/speaker-filled-audio-tool.png")} className="w-4 h-4 mr-2 m-auto" />
                <img alt="battery" src={require("../assets/icons/half-battery.png")} className="w-4 h-4 mr-2 m-auto" />
                <span className=" m-auto"> 64 % </span> 
            </div>
        </div>
    )
}