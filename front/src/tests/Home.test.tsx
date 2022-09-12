import React from "react";
import { screen } from "@testing-library/dom";
import { render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Home from "../components/Home";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import { expect, jest, test } from "@jest/globals";
import * as Redux from "react-redux";
import { useSelector } from "react-redux";

import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

interface ListState {
  listId: number | null;
  listName: string | null;
  userId: number | null;
}

const mockList: { listArray: Array<ListState> } = {
  listArray: [
    {
      listId: 1,
      listName: "Compras",
      userId: 1,
    },
    {
      listId: 2,
      listName: "Ameixas",
      userId: 1,
    },
    {
      listId: 3,
      listName: "Dia",
      userId: 1,
    },
    {
      listId: 4,
      listName: "Semana",
      userId: 1,
    },
  ],
};

interface UserState {
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  lists: Array<ListState>;
}

const mockUser: UserState = {
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

// FETCH
interface fetchState {
  listId: number | null;
  listName: string | null;
  userId: number | null;
}

const fetchRes: fetchState = {
  listId: 10,
  listName: "test new list",
  userId: 1,
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fetchRes),
  })
) as jest.Mock;

describe("Home module", () => {
  it("should render home page", async () => {
    const store: any = mockStore({
      lists: mockList,
    });

    const { getByText, debug } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Home />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText("Compras")).toBeTruthy();
    expect(getByText("Ameixas")).toBeTruthy();
    expect(getByText("Dia")).toBeTruthy();
    expect(getByText("Semana")).toBeTruthy();
  });

  it("should open new list modal", async () => {
    const store: any = mockStore({
      lists: mockList,
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const newListBtn = getByTestId("newListBtn");
    userEvent.click(newListBtn);

    expect(await screen.findByText("New List")).toBeTruthy();
  });

  it("should create a new list", async () => {
    const store: any = mockStore({
      lists: mockList,
      user: mockUser,
    });

    const { getByTestId, getByLabelText, getByText, debug } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const newListBtn = getByTestId("newListBtn");
    userEvent.click(newListBtn);

    const createListBtn = getByText("Create List");
    const inputListName = getByLabelText("List Name");

    await act(async () => {
      userEvent.type(inputListName, "test new list");
      userEvent.click(createListBtn);
    });


    expect(await screen.findByText('List successfully created!')).toBeTruthy()
  });
});
