import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";
import "../Stylings/BottomButtons.css";
import BottomButton from "./BottomButton";

export default function BottomButtons() {
    const setScene = useContext(SessionContext).setCurrentScene;
    return (
        <footer id="BottomButtons" className="container horizontal">
            <BottomButton
                icon={"home"}
                caption={"Cuts"}
                className={"active"}
                onClick={() => {
                    setScene("cut");
                }}
            />
            <BottomButton
                icon={"calculate"}
                caption={"Boards"}
                onClick={() => {
                    setScene("board");
                }}
            />
            <BottomButton
                icon={"settings"}
                caption={"settings"}
                onClick={() => {
                    setScene("settings");
                }}
            />
        </footer>
    );
}
