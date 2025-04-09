import { useState } from "react";
import DropdownFilter from "./components/DropdownFilter";

function App() {
	const [count, setCount] = useState(30);

	return (
		<main className="h-screen w-screen bg-slate-50 p-4 dark:bg-slate-900">
			<h1 className="mb-4 font-bold text-3xl">GitHub Repository Search</h1>

			<div className="flex-row gap-2">
				<DropdownFilter
					defaultValue={count}
					label="Items per page"
					options={[
						{ label: "5", value: 5 },
						{ label: "10", value: 10 },
						{ label: "30", value: 30 },
						{ label: "100", value: 100 },
					]}
				/>
			</div>
		</main>
	);
}

export default App;
