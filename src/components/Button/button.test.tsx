import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("test button", () => {
  it("default", () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.queryByText("Nice");

    // 检查 element 是否为 null
    if (element) {
      expect(element).toBeInTheDocument();
      expect(element.tagName).toEqual("BUTTON");
      expect(element).toHaveClass("btn btn-default");
    } else {
      // 处理 element 为 null 的情况
      fail("Expected element to be present but it was not found.");
    }
  });
  it("default", () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.queryByText("Nice");
    expect(element).toBeInTheDocument();
  });
  it("default", () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.queryByText("Nice");
    expect(element).toBeInTheDocument();
  });
  it("default", () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.queryByText("Nice");
    expect(element).toBeInTheDocument();
  });
});
