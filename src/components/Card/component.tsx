import clsx from "clsx";
import type { HTMLAttributes } from "react";

export default function Card(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded border-1 border-black/20 bg-slate-200 p-4 dark:border-white/20 dark:bg-slate-800",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
