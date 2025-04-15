import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card(props: CardProps) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded border-1 border-black/20 bg-slate-100 p-4 dark:border-white/20 dark:bg-slate-800/50",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
