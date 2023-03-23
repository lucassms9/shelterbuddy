import { render, screen } from "@testing-library/react";
import Header from "../index";

describe("Header Component", () => {
  test("should render header with success", async () => {
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
  test("should render total count with success", async () => {
    // ARRANGE
    render(
      <Header
        loading={false}
        totalCount={10}
        debouncedChangeHandler={jest.fn()}
      />
    );

    expect(screen.getByTestId("total-count")).toBeTruthy();
  });
});
