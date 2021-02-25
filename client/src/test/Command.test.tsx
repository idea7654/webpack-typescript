import * as React from "react";
import CommandList from "../components/CommandList";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const sampleData = {
  title: "으아",
};

describe("<CommandList />", () => {
  it("correctly rendering", () => {
    const utils = render(<CommandList data={sampleData} />);
    const result = utils.getByText("으아");
    expect(result).toBeTruthy();
  });
});
