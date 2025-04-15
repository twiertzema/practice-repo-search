import { useEffect, useState } from "react";
import DropdownFilter from "../../components/DropdownFilter";
import RepoCard from "../../components/RepoCard";
import SearchInput from "../../components/SearchInput";
import {
  DROPDOWN_LABELS,
  ORDER_OPTIONS,
  PER_PAGE_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../constants";
import type { GitHubRepoResponseStub } from "../../types";

/** Sort of a stand-in for i18n. */
function getLabel(value: string) {
  return DROPDOWN_LABELS[value] ?? value;
}

export default function MainPage() {
  const [search, setSearch] = useState("");

  const [perPage, setPerPage] = useState(PER_PAGE_OPTIONS[2]);
  const [sort, setSort] = useState(SORT_BY_OPTIONS[0]);
  const [order, setOrder] = useState(ORDER_OPTIONS[1]);

  const [results, setResults] = useState<GitHubRepoResponseStub[]>([]);

  useEffect(() => {
    if (search === "") {
      setResults([]);
      return;
    }

    const url = new URL("https://api.github.com/search/repositories");
    const params = new URLSearchParams();
    if (search !== "") params.set("q", search);
    if (sort !== "best-match") params.set("sort", sort);
    params.set("order", order);
    params.set("per_page", perPage);
    url.search = params.toString();

    console.log(url.toString());

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error("Request error!", response.status, response.statusText);
          setResults([]);
          return;
        }

        return response.json();
      })
      .then((data) => setResults(data.items));

    // TODO: Make query. Raw fetch? React query?
  }, [search, perPage, sort, order]);

  return (
    <main className="m-8 flex h-fill w-fill flex-col items-center">
      <div className="flex w-4xl flex-col gap-4">
        <h1 className="font-bold text-3xl">GitHub Repository Search</h1>

        <SearchInput defaultValue={search} onSearch={setSearch} />

        <div className="flex gap-4">
          <DropdownFilter
            defaultValue={perPage}
            getLabel={getLabel}
            label="Items per page"
            onChange={setPerPage}
            options={PER_PAGE_OPTIONS}
          />

          <DropdownFilter
            defaultValue={sort}
            getLabel={getLabel}
            label="Sort by"
            onChange={setSort}
            options={SORT_BY_OPTIONS}
          />

          <DropdownFilter
            defaultValue={order}
            getLabel={getLabel}
            label="Order"
            onChange={setOrder}
            options={ORDER_OPTIONS}
          />
        </div>

        {results.map((item) => (
          <RepoCard
            description={item.description}
            key={item.id}
            name={item.full_name}
            stars={item.stargazers_count}
            updated={new Date(item.updated_at)}
            url={item.html_url}
          />
        ))}
      </div>
    </main>
  );
}
