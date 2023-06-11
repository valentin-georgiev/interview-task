import React, { useContext, useEffect, useRef, useState } from "react";
import { PeopleContext } from "./ContextApi";
import Person from "./Person";

// Note:
// What are the possible optimizations that we can do to the component ?
const ListPeople = () => {
	const [filter, setFilter] = useState("");
	const filterData = useRef({
		value: "",
	});
	const { data, setData } = useContext(PeopleContext);

	// Note:
	// fetching people data is way too complicated
	// use your knowledge of Promises and fix it/ simplify it
	const fetchPeopleData = async () =>
		await fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => data)
			.catch((error) => error);

	useEffect(() => {
		const getPeopleData = async () => {
			const response = await Promise.all([fetchPeopleData()]).then(([peopleData]) =>
				Promise.resolve(peopleData)
			);
			setData(response);
		};

		getPeopleData();
	}, []);

	useEffect(() => {
		filterData.current.value = filter;
	}, [filter, filterData, data, setData]);

	if (!data) {
		return <div>Loading ...</div>;
	}

	const people = filter ? data.filter((person) => person.name.includes(filter)) : data;

	return (
		<div>
			<label>
				<b>Filter by NAME</b>
			</label>
			<br />
			{/* Note:
			    Filter is not working as expected.
				Please, fix it.
			*/}
			<input
				type='text'
				value={filterData.current.value}
				onChange={(e) => setFilter(e.target.value)}
			/>
			{people.map((person, index) => (
				<Person
					index={index}
					name={person.name}
					email={person.email}
					phone={person.phone}
				/>
			))}
		</div>
	);
};

export default ListPeople;
