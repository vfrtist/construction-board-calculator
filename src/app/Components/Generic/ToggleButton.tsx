export interface ToggleButtonProps {
	value: string;
	caption: string;
	isActive?: boolean;
	onClick?: Function;
}

export default function ToggleButton({
	value,
	caption,
	isActive,
	onClick,
}: ToggleButtonProps) {
	return (
		<button
			key={value}
			className={`ToggleButton ${isActive ? "active" : ""}`}
			onClick={() => onClick?.(value)}
			value={value}
		>
			{caption}
		</button>
	);
}
