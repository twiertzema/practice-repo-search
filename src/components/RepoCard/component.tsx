import clsx from "clsx";
import Card, { type CardProps } from "../Card";

interface RepoCardProps extends CardProps {
  description: string;
  name: string;
  stars: number;
  updated: Date;
  url: string;
}

const dateFormat = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function RepoCard({
  description,
  name,
  stars,
  updated,
  url,
  ...props
}: RepoCardProps) {
  return (
    <Card
      {...props}
      className={clsx("flex flex-col gap-2 font-medium", props.className)}
    >
      <h2 className="text-blue-600 text-xl dark:text-blue-400">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h2>
      <p className="text-xl">{description}</p>
      <p className="flex gap-2 font-semibold text-sm opacity-50">
        <span>{stars} stars</span>
        <span>&middot;</span>
        <span>Updated on {dateFormat.format(updated)}</span>
      </p>
    </Card>
  );
}
