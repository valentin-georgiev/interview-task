import React from "react";
import { render, screen } from "@testing-library/react";

import ListPeople from "./ListPeople";

// Note:
// Test seems to fail. Use your knowledge to fix the test and also test fetching data
describe("Testing ListPeople component", () => {
	it("should render a single person as expected", () => {
		render(<ListPeople />);

		expect(screen.getByTestId("Container__Person__1")).toBeInTheDocument();
	});
});
