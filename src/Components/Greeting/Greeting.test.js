import React from "react";
import Greeting from "./Greeting";

import renderer from "react-test-renderer";
import { Text } from "react-native";

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
