import { useState, useEffect } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

export type CardState = "board" | "cut";

export default function Card() {
  const [currentState, setCurrentState] = useState<CardState>("board");
  const [boardLength, setBoardLength] = useState(96);

  return (
    <div className="card">
      <CardHeader boardLength={boardLength} setBoardLength={setBoardLength} />
      <CardBody currentState={currentState} />
      <CardFooter currentState={currentState} />
    </div>
  );
}
