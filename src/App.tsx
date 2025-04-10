import { useEffect, useState } from "react";
import DropdownFilter from "./components/DropdownFilter";
import { ORDER_OPTIONS, PER_PAGE_OPTIONS, SORT_BY_OPTIONS } from "./constants";

function App() {
  const [perPage, setPerPage] = useState("30");
  const [sort, setSort] = useState("best-match");
  const [order, setOrder] = useState("asc");

  // TODO: Make query with params.
  useEffect(() => {
    console.log(perPage, sort, order);
  }, [perPage, sort, order]);

  return (
    <main className="h-screen w-screen bg-slate-50 p-4 dark:bg-slate-900">
      <h1 className="mb-4 font-bold text-3xl">GitHub Repository Search</h1>

      <div className="flex gap-4">
        <DropdownFilter
          defaultValue={perPage}
          label="Items per page"
          onChange={setPerPage}
          options={PER_PAGE_OPTIONS}
        />

        <DropdownFilter
          defaultValue={sort}
          label="Sort by"
          onChange={setSort}
          options={SORT_BY_OPTIONS}
        />

        <DropdownFilter
          defaultValue={order}
          label="Order"
          onChange={setOrder}
          options={ORDER_OPTIONS}
        />
      </div>
    </main>
  );
}

export default App;
