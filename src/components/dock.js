export const Dock = () => {
    return (
        <div className="absolute bottom-0 ml-80 left-96">
            <div className="flex justify-center bg-zinc-900  w-fit m-auto px-2 py-2 rounded-2xl mb-2">
                {/* P I N N E D */}
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/apps/mongo.png")} className="w-9" />
                </div>
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/apps/notion.png")} className="w-9" />
                </div>
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/apps/vscode.png")} className="w-9" />
                </div>
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/apps/telegram.png")} className="w-9" />
                </div>
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/apps/firefox.png")} className="w-9" />
                </div>
                {/* O P E N E D  */}
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/apps/vlc.png")} className="w-9" />
                </div>

                {/* L I N E */}
                <dov className="border border-gray-700 h-7 mx-1 my-auto" ></dov>

                {/* O P E N E D  */}
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/folderIcons/folder.png")} className="w-9" />
                </div>
                <div className="hover:bg-zinc-800 rounded-2xl px-3 py-1">
                    <img alt="app" src={require("../assets/icons/apps/9dots.png")} className="w-9" />
                </div>
            </div>
        </div>
    )
}