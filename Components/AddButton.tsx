import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";
import { BoardDictionary } from "../Data/SessionContext";
import { BoardDimension } from "../Utility/calculator";

export default function AddButton() {
    const addFunction = useContext(SessionContext).setBoards;
    return (
        <button
            type="button"
            id="AddButton"
            onClick={() => {
                const newSection: BoardDictionary = {
                    [crypto.randomUUID()]: { dimension: new BoardDimension(), cuts: [] },
                };
                addFunction((prev: any) => ({ ...prev, ...newSection }));
            }}
        >
            +
        </button>
    );
}
