export const DesktopIcons = () => {
    return (
        <div className="absolute top-20 left-20 cursor-default">
            <div className="hover:bg-zinc-200 hover:bg-opacity-10 rounded-2xl px-3 py-1">
                <img alt="app" src={require("../assets/icons/folderIcons/folder.png")} className="w-14" />
                <span className="text-white"> Home </span>
            </div>
        </div>
    )
}