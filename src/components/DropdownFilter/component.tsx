import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";

type DropdownOption = { label: string; value: string | number };

interface DropdownFilterProps extends HTMLAttributes<HTMLDivElement> {
	defaultValue?: string | number;
	label: string;
	options: DropdownOption[];
}

export default function DropdownFilter({
	defaultValue,
	label,
	options,
	...props
}: DropdownFilterProps) {
	const [value, setValue] = useState(defaultValue);

	return (
		<div
			{...props}
			className={clsx("dropdown", "dropdown-start", props.className)}
		>
			<button className="m1" type="button">
				{label} <span className="mx-2">{value}</span> &#9660;
			</button>
			<ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 shadow-sm">
				{options.map((option) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: TODO: handle keyboard input
					<li
						className="p-1 hover:bg-base-200"
						key={option.value}
						onClick={() => {
							console.log(option);
							setValue(option.value);
						}}
					>
						{option.label}
					</li>
				))}
			</ul>
		</div>
	);
}
