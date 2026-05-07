import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";
import "../Stylings/BoardList.css";
import { BoardList, CutBoard } from "../Utility/calculator";
import Board from "./Board";

export interface BoardListProps {
    id: string;
}

function* arrayReducer(
    boards: CutBoard[]
): Generator<[qty: number, value: CutBoard]> {
    if (boards.length === 0) {
        return;
    }
    if (boards.length === 1) {
        yield [1, boards[0]];
        return;
    }
    let left = boards[0];
    let count = 1;
    for (let index = 1; index < boards.length; index++) {
        let right = boards[index];
        if (left.equals(right)) {
            count++;
        } else {
            yield [count, left];
            left = right;
            count = 1;
        }
    }
    yield [count, left];
}

export default function BoardSection({ id }: BoardListProps) {
    const data = useContext(SessionContext).boards[id];
    const boardList = BoardList.fromBoardData(data);
    const compactList = arrayReducer(boardList);
    return (
        <div className="BoardList card">
            <h2>
                {data.dimension.name} - {boardList.length} Boards
            </h2>
            <ul className="container vertical">
                {[...compactList].map(([qty, value], index) => (
                    <Board
                        key={index.toString()}
                        length={value.length}
                        board={value}
                        qty={qty}
                    />
                ))}

                {/* {boardList.map((board, index) => (
          <Board key={index.toString()} length={board.length} board={board} />
        ))} */}
            </ul>
        </div>
    );
}
