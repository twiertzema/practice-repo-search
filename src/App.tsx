import { useState } from "react";
import DropdownFilter from "./components/DropdownFilter";

function App() {
	const [count, setCount] = useState(30);

	return (
		<main className="h-screen w-screen p-4">
			<h1 className="mb-4">GitHub Repository Search</h1>
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
