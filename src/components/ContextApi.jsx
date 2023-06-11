import { createContext, useState } from "react";

export const PeopleContext = createContext();

export const PeopleDataProvider = ({ children }) => {
	const [data, setData] = useState(null);

	const value = {
		data,
		setData,
	};
	return <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>;
};
