import {
  getRectanglePerimeter,
  getRectangleArea,
  getRectangleInfo,
} from "../js/rectangle.js";

// First test using getRectanglePerimeter function
test("should properly calculate rectantle perimeter", () => {
  const perimeter = getRectanglePerimeter(2, 3);
  expect(perimeter).toBe(10);
});

// Second test using getRectangleAread function
test("should properly calculate rectangle area", () => {
  const area = getRectangleArea(5, 5);
  expect(area).toBe(25);
});

// Thirds test using getRectangleInfo function
test("should properly output correct information about rectangle", () => {
  const output = getRectangleInfo(6, 4);
  expect(output).toBe(
    console.log("The perimeter of a rectangle is 20 and the area is 24")
  );
});
