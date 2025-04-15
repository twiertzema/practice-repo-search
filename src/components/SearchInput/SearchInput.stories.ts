import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SearchInput from "./component";

const meta = {
  title: "components/SearchInput",
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSearch: fn(),
  },
};
