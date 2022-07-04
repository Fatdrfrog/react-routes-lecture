import { useState, useEffect } from "react";
import md5 from "md5";
import axios from "axios";
import { Grid } from "@mui/material";
import { CardItem } from "../card-item";

export const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getAllComics();
  }, []);

  const getAllComics = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?ts=${
          process.env.REACT_APP_TS
        }&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${md5(
          process.env.REACT_APP_TS +
            process.env.REACT_APP_PRIVATE_KEY +
            process.env.REACT_APP_PUBLIC_KEY
        )}`
      )
      .then((res) => res.data)
      .then((res) => {
        setComics(res.data.results);
      });
  };

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
