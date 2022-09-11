import React from "react";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event";
import Login from "../components/Login";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

interface ListState {
  listId: number | null;
  listName: string | null;
  userId: number | null;
}

interface UserState {
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  lists: Array<ListState>;
}

const mockRes: UserState = {
  userId: 1,
  firstName: "Yutaro",
  lastName: "Negi",
  email: "yutaro@email.com",
  password: "1234",
  lists: [
    {
      listId: 1,
      listName: "Compras",
      userId: 1,
    },
    {
      listId: 2,
      listName: "Compras",
      userId: 1,
    },
    {
      listId: 3,
      listName: "Compras",
      userId: 1,
    },
    {
      listId: 4,
      listName: "Compras",
      userId: 1,
    },
  ],
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockRes),
  })
) as jest.Mock;



describe("Login module", () => {
  it("should render a login form", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });

  it("login should be sucessufull", async () => {
    const { getByText, getByLabelText, debug } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginButton = getByText("Login");
    const emailInput = getByLabelText("e-mail");
    const passowrdInput = getByLabelText("password");

    await act(async () => {
      userEvent.type(emailInput, "yutaro@test.com");
      userEvent.type(passowrdInput, "1234");

      userEvent.click(loginButton);
    });
    
    expect(await screen.findByText('Successfully loged in!')).toBeTruthy()
  });

  it("should warn the user", async () => {
    const { getByText, getByLabelText, debug } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginButton = getByText("Login");
    const emailInput = getByLabelText("e-mail");

    await act(async () => {
      userEvent.type(emailInput, "yutaro@test.com");
      userEvent.click(loginButton);
    });

    expect(await screen.findByText('Please fill all the fields!')).toBeTruthy()
  });
});
