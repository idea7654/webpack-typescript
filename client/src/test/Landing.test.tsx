import * as React from "react";
import Landing from "../components/Landing";
import { render, fireEvent, screen } from "@testing-library/react";
import { InputProvider } from "../context/InputContext";
import "@testing-library/jest-dom";
describe("<Landing />", () => {
  it("input change", () => {
    const utils = render(
      <InputProvider>
        <Landing />
      </InputProvider>
    );
    const placeHolder = utils.getByPlaceholderText("명령어를 입력하세요");
    fireEvent.change(placeHolder, {
      target: {
        value: "으아아",
      },
    });
    expect(placeHolder).toHaveAttribute("value", "으아아");
  });

  it("correctly react", () => {
    const onPress = jest.fn();
    const utils = render(
      <InputProvider>
        <Landing onPress={onPress} />
      </InputProvider>
    );
    const placeHolder = utils.getByPlaceholderText("명령어를 입력하세요");
    fireEvent.change(placeHolder, {
      target: {
        value: "sudo",
      },
    });
    fireEvent.keyPress(placeHolder, {
      Key: "Enter",
      code: 13,
      charCode: 13,
    });
    expect(onPress).toBeCalled();
  });
});
