import Scene from "./Scene";
import CutBoardSection from "../Components/CutBoardSection";
import AddButton from "../Components/AddButton";
import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";
import "../Stylings/CutBoard.css";

export default function CutScene() {
    const sections = useContext(SessionContext).boards;

    return (
        <Scene id={"CutScene"}>
            {Object.keys(sections).map((section) => (
                <CutBoardSection id={section} />
            ))}
            <AddButton />
        </Scene>
    );
}
