import { Search } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  debounce,
  InputAdornment,
  Pagination,
  TextField,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import TableContent from "./component/Table";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileList from "./component/Table/MobileList";

import { useLazyQuery } from "@apollo/client";
import { LIST_ANIMALS } from "./queries";
import { Query, QueryAnimalsArgs, SortEnumType } from "./__generated__/graphql";
import { getCursor } from "./utils/utils";

const App = () => {
  const [value, setValue] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [cursorStartPage, setCursorStartPage] = useState("");
  const [page, setPage] = useState(1);

  const [getAnimal, { loading, error, data, refetch }] = useLazyQuery<
    Query,
    QueryAnimalsArgs
  >(LIST_ANIMALS, {
    variables: {
      order: [
        {
          name: SortEnumType.Asc,
        },
      ],
      where: {
        name: {
          contains: value,
        },
      },
      after: cursorStartPage,
    },
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  useEffect(() => {
    getAnimal();
  }, [getAnimal]);

  useEffect(() => {
    // setCursorStartPage(data?.animals?.pageInfo.startCursor || "");
    console.log(data);
  }, [data]);
  useEffect(() => {
    // setCursorStartPage(data?.animals?.pageInfo.startCursor || "");
    const cursor = getCursor(page, 10);
    setCursorStartPage(cursor);
    // refetch()
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
        <CardContent>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box display="flex" alignItems="center" flex={1}>
              <Typography variant="h5">Your Animals</Typography>
              {!loading && (
                <Box
                  width="41px"
                  height="25px"
                  display="flex"
                  justifyContent="center"
                  borderRadius="100px"
                  color="white"
                  marginLeft="4px"
                  sx={{ backgroundColor: "var(--orange-color)" }}
                >
                  <Typography>{data?.animals?.totalCount}</Typography>
                </Box>
              )}
            </Box>

            <Box display="flex" flex={0.5} justify-content="flex-end">
              <TextField
                sx={{
                  minWidth: "100%",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                label=""
                placeholder="Search an animal by name"
                disabled={false}
                variant="outlined"
                onChange={debouncedChangeHandler}
              />
            </Box>
          </Box>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress />
            </Box>
          ) : (
            <>
              {matches ? (
                <TableContent animals={data?.animals} />
              ) : (
                <MobileList animals={data?.animals} />
              )}
            </>
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
