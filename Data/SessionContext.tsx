import { createContext } from "react";
import { BoardDimension, CutInput } from "../Utility/calculator";
import { SceneKey } from "./SceneList";

export interface BoardData {
    dimension: BoardDimension;
    cuts: CutInput[];
}

export type BoardDictionary = Record<string, BoardData>;

export interface SessionData {
    boards: BoardDictionary;
    currentScene: SceneKey;
    setBoards: React.Dispatch<React.SetStateAction<BoardDictionary>>;
    setCurrentScene: React.Dispatch<React.SetStateAction<SceneKey>>;
}

export const SessionContext = createContext<SessionData>({
    boards: {},
    currentScene: "cut",
    setBoards: () => { },
    setCurrentScene: () => { },
});
