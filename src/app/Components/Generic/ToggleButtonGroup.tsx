import React from "react";
import "../../Stylings/ToggleButtonGroup.css";

export interface SettingsGroupProp {
	name: string;
	children: React.ReactElement[];
	activeValue?: any;
	onChange?: Function;
}

export default function ToggleButtonGroup({
	name,
	children,
	activeValue,
	onChange,
}: SettingsGroupProp) {
	// if no active value is given, take the first active value
	const currentValue = activeValue ?? children[0]?.props.value;

	return (
		<div className="ToggleButtonGroup container">
			<h3>{name}</h3>
			<div className="ButtonGroup">
				{children.map((child) =>
					React.cloneElement(child, {
						key: child.props.value,
						isActive: child.props.value === currentValue,
						onClick: onChange,
					})
				)}
			</div>
		</div>
	);
}
