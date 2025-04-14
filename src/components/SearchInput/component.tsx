import { Input } from "@headlessui/react";
import { useDebounce } from "@uidotdev/usehooks";
import clsx from "clsx";
import { type HTMLAttributes, useEffect, useState } from "react";

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  /** @default 300 */
  debounce?: number;
  defaultValue?: string;
  /** Called with the debounced value. */
  onSearch: (search: string) => void;
}

/** Essentially a text input with a built-in debounce. */
export default function SearchInput({
  debounce = 300,
  defaultValue,
  onSearch,
  ...props
}: SearchInputProps) {
  const [value, setValue] = useState(defaultValue ?? "");

  const debouncedValue = useDebounce(value, debounce);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <Input
      {...props}
      className={clsx(
        "appearance-none bg-slate-200 p-2 focus:outline-none",
        "rounded border-1 border-black/20 dark:border-white/20 dark:bg-slate-800",
        "hover:bg-slate-300 focus:bg-slate-300 dark:focus:bg-slate-700 dark:hover:bg-slate-700",
      )}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
    />
  );
}
