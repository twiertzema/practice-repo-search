import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import type { GitHubRepoResponseStub } from "../../types";
import MainPage from "./component";

const meta = {
  title: "pages/Main",
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Seed faker to give consistent randomization.
faker.seed(1337);

// Create fake data for the GitHub request to respond with.
const DATA_COUNT = 100;
const TEST_DATA = {
  total_count: DATA_COUNT,
  incomplete_results: false,
  items: Array.from(new Array(DATA_COUNT)).map<GitHubRepoResponseStub>(() => {
    const author = faker.internet.username();
    const name = faker.internet.domainWord();

    return {
      id: faker.number.int(9999999),
      name,
      full_name: `${author}/${name}`,
      html_url: "https://github.com",
      description: faker.lorem.words({ min: 1, max: 10 }),
      created_at: faker.date.past({ years: 5 }).toISOString(),
      updated_at: faker.date.past().toISOString(),
      stargazers_count: faker.number.int(100000),
    };
  }),
};

export const Default: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://api.github.com/search/repositories",
          ({ request }) => {
            const url = new URL(request.url);
            const search = url.searchParams.get("q") ?? "";

            const sort = url.searchParams.get("sort");
            const order = url.searchParams.get("order") ?? "desc";
            const perPage = Number(url.searchParams.get("per_page") ?? 30);

            const results = TEST_DATA.items.filter(
              (item) =>
                item.full_name.includes(search) ||
                item.description.includes(search),
            );

            if (sort === "stars")
              results.sort((a, b) => a.stargazers_count - b.stargazers_count);
            else if (sort === "updated")
              results.sort(
                (a, b) => Date.parse(a.updated_at) - Date.parse(b.updated_at),
              );
            if (order === "desc") results.reverse();

            return HttpResponse.json({
              ...TEST_DATA,
              items: results.slice(0, perPage),
            });
          },
        ),
      ],
    },
  },
};
