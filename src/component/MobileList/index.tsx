import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AnimalsConnection, Maybe } from "../../__generated__/graphql";
import { ArrowForwardIos } from "@mui/icons-material";

const MobileList = ({ animals }: { animals?: Maybe<AnimalsConnection> }) => {
  return (
    <Box marginTop="30px"  data-testid="table-mobile">
      {animals?.edges?.map((row, index) => {
        const renderImage =
          row.node.photoUrl || "/assets/images/pet_placeholder.png";

        return (
          <Accordion
            sx={{
              backgroundColor: "var(--light-gray-color)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="content"
              id="header"
            >
              <Box display="flex" alignItems="center">
                <Box padding="8px">
                  <Avatar alt="Remy Sharp" src={renderImage} />
                </Box>
                <Box padding="8px">
                  <Typography>{row.node.name}</Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box width="100%">
                <Typography color="var(--dark-gray-color)">
                  Type:{" "}
                  <Typography component="span" color="var(--black-color)">
                    {row.node.animalType.name}
                  </Typography>
                </Typography>
                <Typography color="var(--dark-gray-color)">
                  Breed:{" "}
                  <Typography component="span" color="var(--black-color)">
                    {row.node.breed.name}
                  </Typography>
                </Typography>
                <Typography color="var(--dark-gray-color)">
                  Gender:{" "}
                  <Typography component="span" color="var(--black-color)">
                    {row.node?.sex?.name || ""}
                  </Typography>
                </Typography>
                <Typography color="var(--dark-gray-color)">
                  Color:{" "}
                  <Typography component="span" color="var(--black-color)">
                    {row.node.color}
                  </Typography>
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  endIcon={<ArrowForwardIos width="24px" height="24px" />}
                >
                  Details
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default MobileList;
