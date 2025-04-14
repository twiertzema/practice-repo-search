import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import capitalize from "capitalize";
import DropdownFilter from "../components/DropdownFilter";

const meta = {
  title: "DropdownFilter",
  component: DropdownFilter,
} satisfies Meta<typeof DropdownFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    getLabel: (value: string) => capitalize(value),
    label: "DropdownFilter",
    onChange: fn(),
    options: ["foo", "bar", "baz"],
  },
};
