import { Grid } from "@mui/material";
import { CardItem } from "../card-item";
import { Outlet, useParams } from "react-router-dom";
import { useSynchronizeItems } from "../../hooks/useSynchronizeItems";

export const Characters = () => {
  const { items: characters } = useSynchronizeItems({ type: "characters" });

  const { comicsID } = useParams();

  if (comicsID) return <Outlet />;

  if (!characters || characters.length === 0) {
    return <>characters not found -_-</>;
  }

  return (
    <Grid container>
      {characters.map((character) => (
        <Grid item xs={3} key={character.id}>
          <CardItem item={character} />
        </Grid>
      ))}
    </Grid>
  );
};
