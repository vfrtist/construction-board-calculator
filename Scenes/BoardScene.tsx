import Scene from "./Scene";
import BoardSection from "../Components/BoardSection";
import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";

export default function BoardScene() {
    const sections = useContext(SessionContext).boards;
    return (
        <Scene id={"BoardScene"}>
            {Object.keys(sections).map((section) => (
                <BoardSection id={section} />
            ))}
        </Scene>
    );
}
