import { expect, test } from "vitest";
import { transformLength } from "./main";


  test("transformLength should handle very long strings", () => {
  expect(transformLength('ramo')).toBe(1);
  expect(transformLength('ramo'.repeat(2500))).toBe(1);
  expect(transformLength('r'.repeat(2499))).toBe(-1); // Length 2499, which is odd
});
  test('transformLength returns 1 for even and -1 odd length strings', () => {
      expect(transformLength("table")).toBe(-1);
      expect(transformLength("wizard")).toBe(1);
    });
  
