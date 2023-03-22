import { Box, styled } from "@mui/material";

export const Grid = styled(Box)`
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
