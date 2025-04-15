import type { Meta, StoryObj } from "@storybook/react";
import RepoCard from "./component";

const meta = {
  title: "components/RepoCard",
  component: RepoCard,
} satisfies Meta<typeof RepoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "Test RepoCard",
    name: "RepoCard",
    stars: 1337,
    updated: new Date(),
    url: "https://google.com",
  },
};
