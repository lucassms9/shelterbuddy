import { useMediaQuery, useTheme } from "@mui/material";
import {
  AnimalsConnection,
  Maybe,
  SortEnumType,
} from "../../__generated__/graphql";
import MobileList from "../MobileList";
import Table, { Data } from "../Table";

type TableContentProps = {
  order: SortEnumType;
  orderBy: string;
  animals?: Maybe<AnimalsConnection>;
  handleRequestSort: (property: keyof Data) => void;
};
const TableContent = ({
  order,
  orderBy,
  animals,
  handleRequestSort,
}: TableContentProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {matches ? (
        <Table
          order={order}
          orderBy={orderBy}
          animals={animals}
          handleRequestSort={handleRequestSort}
        />
      ) : (
        <MobileList animals={animals} />
      )}
    </>
  );
};

export { TableContent };
