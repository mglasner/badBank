import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateAccount from "./components/create_account.jsx";
import Login from "./components/login.jsx";

test("create account component", () => {
  render(<CreateAccount />);
  screen.getByPlaceholderText("Enter name");
  screen.getByRole("button", {
    name: "Create Account",
  });
});

test("login", () => {
  render(<Login />);
  screen.getByText("Login");
});

test("create new account", () => {
  render(<CreateAccount />);
  const input_name = screen.getByPlaceholderText("Enter name");
  const input_email = screen.getByPlaceholderText("Enter email");
  const input_password = screen.getByPlaceholderText("Enter password");

  fireEvent.change(input_name, { target: { value: "john doe" } });
  fireEvent.change(input_email, { target: { value: "john@mail.com" } });
  fireEvent.change(input_password, { target: { value: "123456" } });
  fireEvent.click(
    screen.getByRole("button", {
      name: "Create Account",
    })
  );
  screen.getByRole("button", {
    name: "Add another account",
  });
});

