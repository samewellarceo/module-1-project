import { sort, search, newsList } from "./main.js";

//Example testing for search function

// Testing for search method.
test('Check if the inputValue "mental health" returns the expectedOutput', () => {
  let inputValue = "mental health";
  let expectedOutput = [
    "Media glare can enrich health tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
  ];

  expect(search(inputValue)).toEqual(expectedOutput);
});

test('Check if "girlfriend" does not exist', () => {
  expect(search("girlfriend")).toHaveLength(0);
});

test("Check if empty inputValue returns all of the titles in the newsList", () => {
  let inputValue = "";

  expect(search(inputValue)).toBe(newsList);
});

test("Check if titles can still be found without including the special characters in the inputValue", () => {
  let inputValue = "Decoder";
  let expectedOutput = [
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
  ];

  expect(search(inputValue)).toEqual(expectedOutput);
});

test("Check if search bar is not case-sensitive", () => {
  let inputValue = "niGhTmARe";
  let expectedOutput = [
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
  ];

  expect(search(inputValue)).toEqual(expectedOutput);
});

// Testing for sort method

test("Check if search results were sorted in ascending order", () => {
  let expectedOutput = [
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
  ];

  search("Decoder");
  expect(sort("ascending")).toEqual(expectedOutput);
});

test("Check if search results were sorted in descending order", () => {
  let expectedOutput = [
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
  ];

  search("Decoder");
  expect(sort("descending")).toEqual(expectedOutput);
});