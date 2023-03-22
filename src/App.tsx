import {
  Box,
  Card,
  CardContent,
  Container,
  debounce,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import logo from "./assets/images/logo.svg";
import TableContent, { Data } from "./component/Table";

import { useLazyQuery } from "@apollo/client";
import { LIST_ANIMALS } from "./queries";
import { Query, QueryAnimalsArgs, SortEnumType } from "./__generated__/graphql";
import { getCursor } from "./utils/utils";
import Header from "./component/Header";

const App = () => {
  const [value, setValue] = useState("");

  const [cursorStartPage, setCursorStartPage] = useState("");
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<SortEnumType>(SortEnumType.Asc);
  const [orderBy, setOrderBy] = useState<keyof Data>("name");

  const handleOrderItem = useMemo(() => {
    if (orderBy === "animalType" || orderBy === "breed" || orderBy === "sex") {
      return {
        [orderBy]: {
          name: order,
        },
      };
    }
    return {
      [orderBy]: order,
    };
  }, [order, orderBy]);

  const [getAnimal, { loading, data }] = useLazyQuery<Query, QueryAnimalsArgs>(
    LIST_ANIMALS,
    {
      variables: {
        order: [handleOrderItem],
        where: {
          name: {
            contains: value,
          },
        },
        after: cursorStartPage,
      },
    }
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const debouncedChangeHandler = debounce(changeHandler, 500);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === SortEnumType.Asc;
    setOrder(isAsc ? SortEnumType.Desc : SortEnumType.Asc);
    setOrderBy(property);
  };

  useEffect(() => {
    getAnimal();
  }, [getAnimal]);

  useEffect(() => {
    const cursor = getCursor(page, 10);
    setCursorStartPage(cursor);
  }, [page]);

  return (
    <Container component="main">
      <Box
        margin="58px 0"
        display="flex"
        justifyContent="center"
        component="header"
      >
        <img src={logo} alt="Shelter Buddy logo" />
      </Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent sx={{ minHeight: "50vh" }}>
          <Header
            loading={loading}
            debouncedChangeHandler={debouncedChangeHandler}
            totalCount={data?.animals?.totalCount || 0}
          />
          {loading ? (
            <Box
              flex={1}
              sx={{ minHeight: "50vh" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress />
            </Box>
          ) : (
            <TableContent
              handleRequestSort={handleRequestSort}
              order={order}
              orderBy={orderBy}
              animals={data?.animals}
            />
          )}

          <Pagination
            hideNextButton
            hidePrevButton
            boundaryCount={10}
            count={Math.ceil((data?.animals?.totalCount || 0) / 10)}
            color="primary"
            page={page}
            onChange={(event, number) => {
              event.preventDefault();
              setPage(number);
            }}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default App;
