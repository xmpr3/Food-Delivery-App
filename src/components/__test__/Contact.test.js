import { render, screen } from "@testing-library/react";
import ContactUS from "../ContactUS.jsx";

test("Should load ContactUS component", () => {
	render(<ContactUS />);

	const heading = screen.getByRole("heading");

	expect(heading).toBeInTheDocument();
});
