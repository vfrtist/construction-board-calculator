import { useContext } from "react";
import { SessionContext } from "../Data/SessionContext";

export interface CutBoardHeaderProps {
    id: string;
}

// this is a series of inputs for width, height and length, and description
export default function CutBoardHeader({ id }: CutBoardHeaderProps) {
    const boards = useContext(SessionContext).boards;
    const { width, length, height, name } = boards[id].dimension;

    return (
        <form action="" className="CutBoardHeader">
            <input
                type="number"
                name="width"
                id={`${id}-width`}
                placeholder="2"
                min={0}
                value={width}
            />
            <label htmlFor={`${id}-width`}>W</label>
            <input
                type="number"
                name="height"
                id={`${id}-height`}
                placeholder="4"
                min={0}
                value={height}
            />
            <label htmlFor={`${id}-height`}>H</label>
            <input
                type="number"
                name="length"
                id={`${id}-length`}
                placeholder="96"
                min={0}
                value={length}
            />
            <label htmlFor={`${id}-length`}>L</label>
            <input
                type="text"
                name="name"
                id={`${id}-name`}
                placeholder="name"
                value={name}
            />
            <label htmlFor={`${id}-name`}>Name</label>
        </form>
    );
}
