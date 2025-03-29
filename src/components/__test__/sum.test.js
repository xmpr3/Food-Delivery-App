import { sum } from "../sum.jsx";

test("Sum function should calculate sum of two numbers", () => {
	const result = sum(3, 4);

	//Assertion
	expect(result).toBe(7);
});
