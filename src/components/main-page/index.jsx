import { Box, Typography } from "@mui/material";
import heroes from "../../assets/heroes.jpg";

export const MainPage = () => {
  return (
    <Box>
      <Typography>Main page</Typography>
      <img src={heroes} alt={"heroes"} style={{ width: "100%" }} />
    </Box>
  );
};
