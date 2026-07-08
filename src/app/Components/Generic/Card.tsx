import { useState, useEffect, createContext } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { CutInput } from "../../Data/Structures";

export type CardState = "board" | "cut";

export interface CardData {
  boardLength: number;
  cardState: CardState;
  cutInputs: CutInput[];
  setBoardLength: (length: number) => void;
  setCardState: (state: CardState) => void;
  setCutInputs: (inputs: CutInput[]) => void;
}

export const CardContext = createContext<CardData>({
  boardLength: 96,
  cardState: "board",
  cutInputs: [],
  setBoardLength: () => { },
  setCardState: () => { },
  setCutInputs: () => { },
});

export default function Card() {
  return (
    <div className="card">
      <CardContext.Provider value={{
        boardLength: 96,
        cardState: "board",
        cutInputs: [],
        setBoardLength: () => { },
        setCardState: () => { },
        setCutInputs: () => { },
      }}>
        <CardHeader />
        <CardBody />
        <CardFooter />
      </CardContext.Provider>
    </div>
  );
}
