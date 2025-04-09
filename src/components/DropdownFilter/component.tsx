import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
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
		<div {...props}>
			<Menu>
				<MenuButton
					className={clsx(
						"flex w-fit cursor-pointer items-center gap-2 bg-slate-200 p-2",
						"rounded border-1 border-black/20 dark:border-white/20 dark:bg-slate-800",
						"hover:bg-slate-300 data-[active]:bg-slate-300 dark:data-[active]:bg-slate-700 dark:hover:bg-slate-700",
					)}
				>
					<span>{label}</span>

					<span>{value}</span>

					<ChevronDownIcon className="pointer-events-none size-4" />
				</MenuButton>

				<MenuItems
					anchor="bottom start"
					className={clsx(
						"w-[var(--button-width)] origin-top-left bg-slate-200 dark:border-white/20 dark:bg-slate-800",
						"rounded border-1 border-black/20 dark:border-white/20 dark:bg-slate-800",
					)}
					transition
				>
					{options.map((option) => (
						<MenuItem key={option.value}>
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: TODO: Support keyboard */}
							<p
								className={clsx(
									"cursor-pointer p-2 hover:bg-slate-300 dark:hover:bg-slate-700",
								)}
								onClick={() => setValue(option.value)}
							>
								{option.label}
							</p>
						</MenuItem>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
}
