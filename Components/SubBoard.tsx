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
        <div className="SubBoard container vertical" style={{ flex: length }}>
            {name && <div className="name">{name}</div>}
            <div
                key={key}
                className={`board ${isActive ? "" : "done"} ${classNames ? classNames : ""
                    }`}
                onClick={() => setIsActive((prev) => !prev)}
            >
                {length}
            </div>
        </div>
    );
}
