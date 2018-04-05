import React from "react";
import { Text, Style } from "react-native";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Greeting from "./Greeting";

it("should be truthy", () => {
  const rendered = renderer.create(<Greeting />).toJSON();
  expect(rendered).toBeTruthy();
});

it("should generate greeting text", () => {
  const personName = "Nameless";
  const rendered = renderer.create(<Greeting name={personName} />).root;
  const text = rendered.findByType(Text).props.children;
  expect(text.join("")).toEqual("Hello, " + personName);
});

it("should have specified styling", () => {
  const style = { width: 50 };
  const rendered = renderer.create(<Greeting style={style} />).toJSON();
  expect(rendered.props.style.width).toEqual(50);
});
