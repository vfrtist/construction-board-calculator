import { useContext } from "react";
import { getCutInput } from "../../Data/Structures";
import CutBoardHeader from "./CutBoardHeader";
import CutBoardLine from "./CutListLine";
import ThemeButton from "../Generic/ThemeButton";
import { CardContext } from "../Generic/Card";
import "../../Stylings/CutList.css";

export default function CutListBody() {
  const { cutInputs, setCutInputs } = useContext(CardContext);

  function addLine() {
    setCutInputs((prev) => [...prev, getCutInput()]);
  }

  return (
    <div className="CutListBody card">
      <CutBoardHeader values={boards[boardID].dimension} />
      <form action="" className="CutListLines container vertical">
        {cutInputs.map((values) => (
          <CutBoardLine
            key={`${values.id}`}
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
