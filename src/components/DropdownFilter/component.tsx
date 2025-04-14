import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";

interface DropdownFilterProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  defaultValue?: string;
  /** Callback to get option labels. */
  getLabel: (value: string) => string;
  /** Label of the dropdown itself. */
  label: string;
  /** Called when value changes, receiving values directly (no labels). */
  onChange: (value: string) => void;
  /**
   * Options of the dropdown filter.
   * These are values, not labels; labels are determined by calling `getLabel`.
   */
  options: string[];
}

/** A custom-styled dropdown select input. */
export default function DropdownFilter({
  defaultValue,
  getLabel,
  label,
  options,
  onChange,
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

          <span>{value ? getLabel(value) : ""}</span>

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
            <MenuItem key={option}>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: TODO: Support keyboard */}
              <p
                className={clsx(
                  "cursor-pointer p-2 hover:bg-slate-300 dark:hover:bg-slate-700",
                )}
                onClick={() => {
                  setValue(option);
                  onChange(option);
                }}
              >
                {getLabel(option)}
              </p>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
