import * as React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import {
  AnimalsConnection,
  Maybe,
  SortEnumType,
} from "../../__generated__/graphql";
import { Avatar, Button } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

export interface Data {
  animalType: string;
  breed: string;
  sex: string;
  name: string;
  color: string;
}

export type Order = "asc" | "desc";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "animalType",
    numeric: false,
    disablePadding: false,
    label: "Type",
  },
  {
    id: "breed",
    numeric: true,
    disablePadding: false,
    label: "Breed",
  },
  {
    id: "sex",
    numeric: false,
    disablePadding: false,
    label: "Gender",
  },
  {
    id: "color",
    numeric: false,
    disablePadding: false,
    label: "Color",
  },
];

interface EnhancedTableProps {
  onRequestSort: (property: keyof Data) => void;
  order: SortEnumType;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => () => {
    onRequestSort(property);
  };

  const sortDirection = order === SortEnumType.Asc ? "asc" : "desc";

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? sortDirection : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? sortDirection : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === SortEnumType.Desc
                    ? "sorted descending"
                    : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable({
  animals,
  order,
  orderBy,
  handleRequestSort,
}: {
  animals?: Maybe<AnimalsConnection>;
  order: SortEnumType;
  orderBy: string;
  handleRequestSort: (property: keyof Data) => void;
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size="medium"
            sx={{
              minWidth: 750,
              borderSpacing: "0px 12px",
              borderCollapse: "separate",
              border: "none",
            }}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {animals?.edges?.map((row, index) => {
                const renderImage =
                  row.node.photoUrl || "/assets/images/pet_placeholder.png";
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.node.name}
                    sx={{
                      backgroundColor: "var(--light-gray-color)",
                    }}
                  >
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      padding="normal"
                      sx={{
                        borderBottom: "none",
                      }}
                    >
                      <Avatar alt="Remy Sharp" src={renderImage} />
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                      }}
                      align="left"
                      padding="normal"
                    >
                      {row.node.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                      }}
                      padding="normal"
                      align="left"
                    >
                      {row.node.animalType.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                      }}
                      padding="normal"
                      align="left"
                    >
                      {row.node.breed.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                      }}
                      padding="normal"
                      align="left"
                    >
                      {row.node.sex?.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                      }}
                      padding="normal"
                      align="left"
                    >
                      {row.node.color}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                      }}
                      padding="normal"
                      align="left"
                    >
                      <Button
                        variant="text"
                        endIcon={<ArrowForwardIos width="24px" height="24px" />}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
