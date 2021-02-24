import { max, min } from "./status";

describe("stats", () => {
  it("get max", () => {
    expect(max([1, 2, 3, 4])).toBe(4);
  });
  it("get min", () => {
    expect(min([1, 2, 3, 4])).toBe(1);
  });
});
