import React from "react";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Register from "../components/Register";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

interface UserState {
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
}

const mockRes: UserState = {
  userId: 1,
  firstName: "Yutaro",
  lastName: "Negi",
  email: "yutaro@email.com",
  password: "1234",
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockRes),
  })
) as jest.Mock;

describe("Register module", () => {
  it("should render a register form", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Register />
        </BrowserRouter>
      </Provider>
    );
  });

  it("Register should be sucessufull", async () => {
    const { getByText, getByLabelText, debug } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Register />
        </BrowserRouter>
      </Provider>
    );

    const RegisterButton = getByText("Register");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("e-mail");
    const passowrdInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");

    await act(async () => {
        userEvent.type(firstNameInput, "testing");
        userEvent.type(lastNameInput, "tester");
        userEvent.type(emailInput, "test@test.com");
        userEvent.type(passowrdInput, "1234");
        userEvent.type(confirmPasswordInput, "1234");

      userEvent.click(RegisterButton);
    });

    expect(await screen.findByText("Success!")).toBeTruthy();
  });

  it("should warn the user the password is incorrect", async () => {
    const { getByText, getByLabelText, debug } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Register />
        </BrowserRouter>
      </Provider>
    );

    const RegisterButton = getByText("Register");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("e-mail");
    const passowrdInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");

    await act(async () => {
      userEvent.type(firstNameInput, "testing");
      userEvent.type(lastNameInput, "tester");
      userEvent.type(emailInput, "test@test.com");
      userEvent.type(passowrdInput, "1234");
      userEvent.type(confirmPasswordInput, "12");

      userEvent.click(RegisterButton);
    });

    expect(await screen.findByText("Passwords does not match!")).toBeTruthy();
  });

  it("should warn the user the something is empty!", async () => {
    const { getByText, getByLabelText, debug } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Register />
        </BrowserRouter>
      </Provider>
    );

    const RegisterButton = getByText("Register");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("e-mail");
    const passowrdInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");

    await act(async () => {
      userEvent.type(firstNameInput, "testing");
      userEvent.type(emailInput, "test@test.com");
      userEvent.type(passowrdInput, "1234");
      userEvent.type(confirmPasswordInput, "12");

      userEvent.click(RegisterButton);
    });

    expect(await screen.findByText("Please fill all the fields!")).toBeTruthy();
  });
});
