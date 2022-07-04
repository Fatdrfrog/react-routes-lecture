import { useState, useEffect } from "react";
import md5 from "md5";
import axios from "axios";
import { Grid } from "@mui/material";
import { CardItem } from "../card-item";

export const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/events?ts=${
          process.env.REACT_APP_TS
        }&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${md5(
          process.env.REACT_APP_TS +
            process.env.REACT_APP_PRIVATE_KEY +
            process.env.REACT_APP_PUBLIC_KEY
        )}`
      )
      .then((res) => res.data)
      .then((res) => {
        setEvents(res.data.results);
      });
  };

  if (!events || events.length === 0) {
    return <>events not found -_-</>;
  }

  return (
    <Grid container>
      {events.map((event) => (
        <Grid item xs={3} key={event.id}>
          <CardItem item={event} />
        </Grid>
      ))}
    </Grid>
  );
};
