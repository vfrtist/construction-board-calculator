import { CutBoard } from "../Utility/calculator";
import SubBoard from "./SubBoard";

export interface BoardProps {
    key: string;
    length: number;
    board: CutBoard;
    qty?: number;
}

export default function Board({ ...props }: BoardProps) {
    return (
        <li key={props.key} className="Board container horizontal">
            {props.qty && <span className="qty">{`${props.qty} -`}</span>}
            {props.board.cuts.map((cut, index) => (
                <SubBoard key={index + props.key} length={cut.length} name={cut.name} />
            ))}
            {props.board.remainingLength > 0 && (
                <SubBoard
                    key={props.board.length.toString() + "remainder"}
                    length={props.board.remainingLength}
                    classNames={"remainder"}
                />
            )}
        </li>
    );
}
