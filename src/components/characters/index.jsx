import { useState, useEffect } from "react";
import md5 from "md5";
import axios from "axios";
import { Grid } from "@mui/material";
import { CardItem } from "../card-item";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllComics();
  }, []);

  const getAllComics = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=${
          process.env.REACT_APP_TS
        }&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${md5(
          process.env.REACT_APP_TS +
            process.env.REACT_APP_PRIVATE_KEY +
            process.env.REACT_APP_PUBLIC_KEY
        )}`
      )
      .then((res) => res.data)
      .then((res) => {
        setCharacters(
          res.data.results.map((el) => ({ ...el, title: el.name }))
        );
      });
  };

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
