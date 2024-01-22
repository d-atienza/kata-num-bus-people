import { filterArray } from "./filterArray.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("numbers greater than 29", () => {
    expect(filterArray([10, 20, 30, 40, 50], (n) => n > 29)).toEqual([30, 40, 50]);
});

test("numbers equal to or less than 13", () => {
    expect(filterArray([11, 12, 13, 14, 15], (n) => n <= 13)).toEqual([11, 12, 13]);
});

test("when predicate doesn't match at all, result is empty array", () => {
    expect(filterArray([1, 2, 3, 4, 5], (n) => n > 5)).toEqual([]);
});