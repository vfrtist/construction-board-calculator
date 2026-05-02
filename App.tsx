import "./styles.css";
import "./Stylings/main.css";
import "./Stylings/colors.css";
import { SessionContext } from "./Data/SessionContext";
import { useEffect, useState } from "react";
import { BoardDictionary } from "./Data/SessionContext";
import BottomButtons from "./Components/BottomButtons";
import { NoahList } from "./Data/NoahCutList";
import { SceneKey, SceneList } from "./Data/SceneList";

// The input of the NoahList is temporary

export default function App() {
    const [currentBoards, setCurrentBoards] = useState<BoardDictionary>({});
    const [currentScene, setCurrentScene] = useState<SceneKey>("board");
    const SceneComponent = SceneList[currentScene];

    // First application mount
    useEffect(() => {
        setCurrentBoards(NoahList);
    }, []);

    return (
        <div className="App">
            <SessionContext.Provider
                value={{
                    boards: currentBoards,
                    currentScene: currentScene,
                    setBoards: setCurrentBoards,
                    setCurrentScene: setCurrentScene,
                }}
            >
                <main>
                    <SceneComponent />
                    <BottomButtons />
                </main>
            </SessionContext.Provider>
        </div>
    );
}
