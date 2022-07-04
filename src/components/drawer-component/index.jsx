import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";
import { DrawerList } from "../drawer-list";

export const DrawerComponent = () => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: theme.defaultWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: theme.defaultWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <DrawerList list={["Home"]} />
      <Divider />
      <DrawerList list={["Comics", "Characters", "Events"]} />
    </Drawer>
  );
};
