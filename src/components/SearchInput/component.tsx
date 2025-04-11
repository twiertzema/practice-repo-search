import { Input } from "@headlessui/react";
import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";

interface SearchInputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  defaultValue?: string;
  onChange: (search: string) => void;
}

export default function SearchInput({
  defaultValue,
  onChange,
  ...props
}: SearchInputProps) {
  const [value, setValue] = useState(defaultValue);

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
        onChange(e.target.value);
      }}
      value={value}
    />
  );
}
