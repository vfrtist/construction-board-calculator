import CutBoardHeader, { CutBoardHeaderProps } from "./CutBoardHeader";
import CutBoardLine from "./CutBoardLine";
import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";

export interface CutBoardSectionProps extends CutBoardHeaderProps { }

export default function CutBoardSection({ id }: CutBoardSectionProps) {
    const pile = useContext(SessionContext).boards[id];
    return (
        <div className="CutBoardSection">
            <CutBoardHeader id={id} />
            <form action="">
                {pile.cuts.map((cut) => (
                    <CutBoardLine id={id} values={cut} />
                ))}
            </form>
        </div>
    );
}
