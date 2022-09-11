import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Header", function () {
  it("should display a valid component", function () {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const component = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    let tree = component.toJSON();
    expect(tree).toBeTruthy()
  });
});
