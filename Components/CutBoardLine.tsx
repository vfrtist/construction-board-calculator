import { CutDimension, CutInput } from "../Utility/calculator";

interface CutBoardLineProps {
    id: string;
    values: CutInput;
}

export default function CutBoardLine({ id, values }: CutBoardLineProps) {
    return (
        <div className="CutBoardLine container horizontal">
            <input
                type="text"
                name="length"
                id={`${id}-length`}
                placeholder="1"
                min={0}
                value={values.dimensions.length}
            />
            <input
                type="text"
                name="qty"
                id={`${id}-qty`}
                placeholder="1"
                min={1}
                step={1}
                value={values.qty}
            />
            <input
                type="text"
                name="name"
                id={`${id}-name`}
                placeholder="1"
                min={1}
                value={values.dimensions.name}
            />
        </div>
    );
}
