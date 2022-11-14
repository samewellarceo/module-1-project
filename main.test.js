import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search(newsList)).toBe("I am a cool web developer");
});
