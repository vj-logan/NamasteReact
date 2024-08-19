import { sum } from "../components/sum"

test('sum function should return sum of two numbers', () => {
    const result = sum(3,4)

    //Assertion
    expect(result).toBe(7);
})