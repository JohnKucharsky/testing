import React from "react";
import Counter from "../Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("header renders with correct text", () => {
  render(<Counter />);
  const header = screen.getByRole("heading", { name: /my counter/i });
  expect(header.textContent).toBe("My Counter");
});

it("counter initially starts with text of 0", () => {
  render(<Counter />);
  const counter = screen.getByTestId("counterValueHeading");

  expect(counter.textContent).toBe("0");
});

it("input contains initial value of 1", () => {
  render(<Counter />);
  const inputEl = screen.getByRole("spinbutton");

  expect(inputEl.value).toBe("1");
});

it("add button renders with + sign", () => {
  render(<Counter />);
  const addBtn = screen.getByRole("button", {
    name: /\+/i,
  });

  expect(addBtn.textContent).toBe("+");
});

it("subtract button renders with - sign", () => {
  render(<Counter />);
  const subtractBtn = screen.getByRole("button", { name: /-/i });

  expect(subtractBtn.textContent).toBe("-");
});

it("changing value of input works correct", () => {
  render(<Counter />);
  const inputEl = screen.getByRole("spinbutton");
  userEvent.clear(inputEl);
  userEvent.type(inputEl, "10");
  expect(inputEl).toHaveValue(10);
});

it("click on plus button adds 1 to counter", () => {
  render(<Counter />);
  const addBtn = screen.getByRole("button", {
    name: /\+/i,
  });
  const counter = screen.getByTestId("counterValueHeading");
  expect(counter.textContent).toBe("0");
  userEvent.click(addBtn);
  expect(counter.textContent).toBe("1");
});

it("click on plus button sub 1 from counter", () => {
  render(<Counter />);
  const subtractBtn = screen.getByRole("button", { name: /-/i });
  const counter = screen.getByTestId("counterValueHeading");
  expect(counter.textContent).toBe("0");
  userEvent.click(subtractBtn);
  expect(counter.textContent).toBe("-1");
});

it("changing input value then clicking add button", () => {
  render(<Counter />);
  const inputEl = screen.getByRole("spinbutton");
  const addBtn = screen.getByRole("button", {
    name: /\+/i,
  });
  const counter = screen.getByTestId("counterValueHeading");
  expect(counter.textContent).toBe("0");
  userEvent.clear(inputEl);
  userEvent.type(inputEl, "20");
  userEvent.click(addBtn);
  userEvent.click(addBtn);
  userEvent.click(addBtn);
  expect(counter.textContent).toBe("60");
});

it("changing input value then clicking sub button", () => {
  render(<Counter />);
  const inputEl = screen.getByRole("spinbutton");
  const subtractBtn = screen.getByRole("button", { name: /-/i });
  const counter = screen.getByTestId("counterValueHeading");
  expect(counter.textContent).toBe("0");
  userEvent.clear(inputEl);
  userEvent.type(inputEl, "20");
  userEvent.click(subtractBtn);
  expect(counter.textContent).toBe("-20");
});

it("counter contains correct className", () => {
  render(<Counter />);
  const counter = screen.getByTestId("counterValueHeading");
  const inputEl = screen.getByRole("spinbutton");
  const subtractBtn = screen.getByRole("button", { name: /-/i });
  const addBtn = screen.getByRole("button", {
    name: /\+/i,
  });
  expect(counter.className).toBe("");
  userEvent.clear(inputEl);
  userEvent.type(inputEl, "100");
  userEvent.click(subtractBtn);
  expect(counter.className).toBe("red");
  userEvent.click(addBtn);
  userEvent.click(addBtn);
  expect(counter.className).toBe("green");
});
