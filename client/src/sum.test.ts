import { sum, sumOf } from "./sum";

test("1+2=3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("sum", () => {
  it("number sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("array sum", () => {
    const sample: any = [1, 2, 3, 4, 5];
    expect(sumOf(sample)).toBe(15);
  });
});
