import type { Meta, StoryObj } from "@storybook/react";
import Card from "./component";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Test card",
  },
};
