import { useContext } from "react";
import { SessionContext } from "../../Data/SessionContext";
import { CutInput } from "../../Data/Structures";

interface CutBoardLineProps {
  boardID: string;
  values: CutInput;
}

export default function CutBoardLine({ boardID, values }: CutBoardLineProps) {
  const { boards, setBoards } = useContext(SessionContext);
  const board = boards[boardID];

  function lineUpdater(newCut: CutInput) {
    setBoards((prev) => ({
      ...prev,
      [boardID]: {
        ...prev[boardID],
        cuts: prev[boardID].cuts.map((cut) =>
          cut.id === newCut.id ? newCut : cut
        ),
      },
    }));
  }

  function removeLine() {
    setBoards((prev) => ({
      ...prev,
      [boardID]: {
        ...prev[boardID],
        cuts: prev[boardID].cuts.filter((cut) => cut.id !== values.id),
      },
    }));
  }

  return (
    <div className="CutBoardLine container horizontal">
      <input
        type="number"
        name="length"
        placeholder="length"
        min={0}
        value={values.length}
        onChange={(e) => {
          lineUpdater({ ...values, length: Number(e.target.value) });
        }}
      />
      <div>x</div>
      <input
        type="number"
        name="qty"
        placeholder="qty"
        min={1}
        step={1}
        value={values.qty}
        onChange={(e) => {
          lineUpdater({ ...values, qty: Number(e.target.value) });
        }}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        className="name"
        onChange={(e) => {
          lineUpdater({ ...values, name: e.target.value });
        }}
      />
      <button type="button" className="delete" onClick={removeLine}>
        x
      </button>
    </div>
  );
}
