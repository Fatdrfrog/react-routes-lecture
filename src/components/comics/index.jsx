import { Grid } from "@mui/material";
import { CardItem } from "../card-item";
import { Outlet, useParams } from "react-router-dom";
import { useSynchronizeItems } from "../../hooks/useSynchronizeItems";

export const Comics = () => {
  const { items: comics } = useSynchronizeItems({ type: "comics" });

  const { comicsID } = useParams();

  if (comicsID) return <Outlet />;

  if (!comics || comics.length === 0) {
    return <>comics not found -_-</>;
  }

  return (
    <Grid container>
      {comics.map((comicsItem) => (
        <Grid item xs={3} key={comicsItem.id}>
          <CardItem item={comicsItem} />
        </Grid>
      ))}
    </Grid>
  );
};
