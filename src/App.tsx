import { Search } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import logo from "./assets/images/logo.svg";
import TableContent from "./component/Table";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileList from "./component/Table/MobileList";

const App = () => {
  const [value, setValue] = useState("123");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

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
              <Box
                width="41px"
                height="25px"
                display="flex"
                justifyContent="center"
                borderRadius="100px"
                color="#fff"
                marginLeft="4px"
                sx={{ backgroundColor: "var(--orange-color)" }}
              >
                <Typography>100</Typography>
              </Box>
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
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Box>
          </Box>
          {matches ? <TableContent /> : <MobileList />}
        </CardContent>
      </Card>
    </Container>
  );
};

export default App;
