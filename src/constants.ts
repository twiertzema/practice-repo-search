import type { DropdownOption } from "./components/DropdownFilter";

export const PER_PAGE_OPTIONS: DropdownOption[] = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "30", value: 30 },
  { label: "100", value: 100 },
];

export const SORT_BY_OPTIONS: DropdownOption[] = [
  { label: "Best match", value: "best-match" },
  { label: "Stars", value: "stars" },
  { label: "Most Updated", value: "updated" },
];

export const ORDER_OPTIONS: DropdownOption[] = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];
