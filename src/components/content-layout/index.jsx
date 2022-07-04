import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export const ContentLayout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      {children}
    </Box>
  );
};
