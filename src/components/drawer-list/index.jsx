import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link as LinkRouter } from "react-router-dom";

export const DrawerList = ({ list }) => {
  return (
    <List>
      {list.map((text) => (
        <ListItem key={text.title} disablePadding>
          <ListItemButton
            component={LinkRouter}
            underline="none"
            color="inherit"
            to={text.to}
          >
            <ListItemText primary={text.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
