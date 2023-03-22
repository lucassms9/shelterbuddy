import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { Grid } from "./styles";

type HeaderProps = {
  loading: boolean;
  totalCount: number;
  debouncedChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({
  loading,
  totalCount,
  debouncedChangeHandler,
}: HeaderProps) => {
  return (
    <Grid>
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
            <Typography>{totalCount}</Typography>
          </Box>
        )}
      </Box>

      <Box display="flex" flex={1} justify-content="flex-end">
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
    </Grid>
  );
};

export { Header };
