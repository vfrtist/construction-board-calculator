import { useContext, useMemo } from "react";
import { CardContext } from "../Generic/Card";
import { BoardList, CutBoard } from "../../Utility/calculator";
import Board from "./Board";
import "../../Stylings/BoardList.css";

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

export default function BoardListBody() {
  const { boardLength, cutInputs } = useContext(CardContext);
  const boardList = useMemo(() => BoardList.fromBoardData(boardLength, cutInputs), [boardLength, cutInputs]);

  // Possible to implement a display style option for compact vs expanded view which would toggle this on/off.
  // For now compact is the only view and the other option would be to map over the boardList instead of compact List
  const compactList = useMemo(() => arrayReducer(boardList), [boardList]);

  return (
    <div className="BoardList card">
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
