import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../index";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(
    <Header
      loading={false}
      totalCount={10}
      debouncedChangeHandler={jest.fn()}
    />
  );

  expect(screen.getByTestId("header-content")).toBeTruthy();
});
