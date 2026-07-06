import CutBoardHeader, { CutBoardHeaderProps } from "./CutBoardHeader";
import CutBoardLine from "./CutBoardLine";
import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";
import { getCutInput } from "../../Data/Structures";
import ThemeButton from "../../Components/Generic/ThemeButton";

export interface CutBoardSectionProps extends CutBoardHeaderProps {}

export default function CutBoardSection({ boardID }: CutBoardSectionProps) {
  const { boards, setBoards } = useContext(SessionContext);

  function addLine() {
    setBoards((prev) => ({
      ...prev,
      [boardID]: {
        ...prev[boardID],
        cuts: [...prev[boardID].cuts, getCutInput()],
      },
    }));
  }

  return (
    <div className="CutBoardSection card">
      <CutBoardHeader values={boards[boardID].dimension} />
      <form action="" className="CutBoardLines container vertical">
        {boards[boardID].cuts.map((values, index) => (
          <CutBoardLine
            key={`${values.id}`}
            boardID={boardID}
            position={index}
            values={values}
          />
        ))}
        <ThemeButton type="button" className="add" onClick={addLine}>
          +
        </ThemeButton>
      </form>
    </div>
  );
}
