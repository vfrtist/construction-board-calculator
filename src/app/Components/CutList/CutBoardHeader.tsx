import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";
import { BoardDimension } from "../Data/Structures";

// this is a series of inputs for width, height and length, and description
export default function CutBoardHeader({ values }: BoardDimension) {
  const { length, width, height, name } = values;
  const { boards, setBoards } = useContext(SessionContext);
  function lineUpdater(newDimension: BoardDimension) {
    setBoards((prev) => ({
      ...prev,
      [boardID]: {
        ...prev[boardID],
        dimension: newDimension,
      },
    }));
  }

  return (
    <form action="" className="CutBoardHeader">
      <input
        className="NameInput"
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => {
          lineUpdater({ ...values, name: e.target.value });
        }}
      />

      <input
        type="number"
        name="width"
        placeholder="2"
        min={0}
        value={width}
        onChange={(e) => {
          lineUpdater({ ...values, width: e.target.value });
        }}
      />

      <input
        type="number"
        name="height"
        placeholder="4"
        min={0}
        value={height}
        onChange={(e) => {
          lineUpdater({ ...values, height: e.target.value });
        }}
      />

      <input
        type="number"
        name="length"
        placeholder="96"
        min={0}
        value={length}
        onChange={(e) => {
          lineUpdater({ ...values, length: e.target.value });
        }}
      />
    </form>
  );
}
