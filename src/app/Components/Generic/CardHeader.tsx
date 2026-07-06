import { useState } from "react";
import { CardState } from "./Card";

export interface CardHeaderProps {
  boardLength: number;
  setBoardLength: Function;
}

export default function CardHeader({
  boardLength,
  setBoardLength,
}: CardHeaderProps) {
  const [name, setName] = useState("Board Name");

  return (
    <form action="" className="CutBoardHeader">
      <input
        className="NameInput"
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="number"
        name="length"
        placeholder="96"
        min={0}
        value={boardLength}
        onChange={(e) => {
          setBoardLength(Number(e.target.value));
        }}
      />
    </form>
  );
}
