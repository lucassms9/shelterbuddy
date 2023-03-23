import { render, screen } from "@testing-library/react";
import { SortEnumType } from "../../../__generated__/graphql";

import TableContent from "../index";
import { useMediaQuery } from "@mui/material";

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: jest.fn().mockReturnValue(false),
}));

describe("TableContent Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("should render web", async () => {
    (useMediaQuery as unknown as jest.Mock).mockReturnValue(true);
    render(
      <TableContent
        handleRequestSort={jest.fn()}
        animals={{
          totalCount: 10,
          pageInfo: {
            endCursor: "endCursor",
            startCursor: "startCursor",
            hasNextPage: false,
            hasPreviousPage: false,
          },
          edges: [
            {
              node: {
                id: "12312",
                animalId: 12312,
                breed: {
                  breedId: 123,
                  name: "123123",
                },
                color: "red",
                animalType: {
                  name: "asdas",
                  animalTypeId: 123,
                },
                name: "dog",
                location: "123123123",
                photoUrl: "photourl.png",
                sex: {
                  name: "12312",
                  sexId: 123,
                },
              },
              cursor: "123123",
            },
          ],
        }}
        order={SortEnumType.Asc}
        orderBy="animalType"
      />
    );
    expect(screen.getByTestId("table-web")).toBeTruthy();
  });

  test("should render mobile", async () => {
    render(
      <TableContent
        handleRequestSort={jest.fn()}
        animals={{
          totalCount: 10,
          pageInfo: {
            endCursor: "endCursor",
            startCursor: "startCursor",
            hasNextPage: false,
            hasPreviousPage: false,
          },
          edges: [
            {
              node: {
                id: "12312",
                animalId: 12312,
                breed: {
                  breedId: 123,
                  name: "123123",
                },
                color: "red",
                animalType: {
                  name: "asdas",
                  animalTypeId: 123,
                },
                name: "dog",
                location: "123123123",
                photoUrl: "photourl.png",
                sex: {
                  name: "12312",
                  sexId: 123,
                },
              },
              cursor: "123123",
            },
          ],
        }}
        order={SortEnumType.Asc}
        orderBy="animalType"
      />
    );
    expect(screen.getByTestId("table-mobile")).toBeTruthy();
  });
});
