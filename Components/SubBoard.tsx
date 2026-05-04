import { useState } from "react";

export interface SubBoardProps {
    key: string;
    classNames?: string;
    length: number;
    name?: string;
}

export default function SubBoard({
    key,
    classNames,
    length,
    name,
}: SubBoardProps) {
    const [isActive, setIsActive] = useState(true);

    return (
        <div
            key={key}
            className={`SubBoard ${isActive ? "" : "done"} ${classNames ? classNames : ""
                }`}
            style={{ flex: length }}
            onClick={() => setIsActive((prev) => !prev)}
        >
            {length}
            {name && ` - ${name}`}
        </div>
    );
}
