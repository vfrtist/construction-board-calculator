import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";
import "../Stylings/BoardList.css";
import { BoardList } from "../Utility/calculator";
import Board from "./Board";

export interface BoardListProps {
    id: string;
}

export default function BoardSection({ id }: BoardListProps) {
    const data = useContext(SessionContext).boards[id];
    const boardList = BoardList.fromBoardData(data);
    return (
        <div className="BoardList">
            <h2>
                {data.dimension.name} - {boardList.length} Boards
            </h2>
            <ul className="container vertical">
                {boardList.map((board, index) => (
                    <Board key={index.toString()} length={board.length} board={board} />
                ))}
            </ul>
        </div>
    );
}
