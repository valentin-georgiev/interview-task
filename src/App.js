import { PeopleDataProvider } from "./components/ContextApi";
import ListPeople from "./components/ListPeople";

function App() {
	return (
		<PeopleDataProvider>
			<ListPeople />
		</PeopleDataProvider>
	);
}

export default App;
