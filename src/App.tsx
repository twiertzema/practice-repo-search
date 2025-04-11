import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import DropdownFilter from "./components/DropdownFilter";
import SearchInput from "./components/SearchInput";
import {
  DROPDOWN_LABELS,
  ORDER_OPTIONS,
  PER_PAGE_OPTIONS,
  SORT_BY_OPTIONS,
} from "./constants";

/** Sort of a stand-in for i18n. */
function getLabel(value: string) {
  return DROPDOWN_LABELS[value] ?? value;
}

function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [perPage, setPerPage] = useState("30");
  const [sort, setSort] = useState("best-match");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    const url = new URL("https://api.github.com/search/repositories");
    const params = new URLSearchParams();
    if (debouncedSearch !== "") params.set("q", debouncedSearch);
    if (sort !== "best-match") params.set("sort", sort);
    params.set("order", order);
    params.set("per_page", perPage);
    url.search = params.toString();

    console.log(url.toString());

    // TODO: Make query. Raw fetch? React query?
  }, [debouncedSearch, perPage, sort, order]);

  return (
    <main className="m-8 flex h-fill w-fill flex-col items-center">
      <div className="flex w-4xl flex-col gap-4">
        <h1 className="font-bold text-3xl">GitHub Repository Search</h1>

        <SearchInput defaultValue={search} onChange={setSearch} />

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
      </div>
    </main>
  );
}

export default App;
