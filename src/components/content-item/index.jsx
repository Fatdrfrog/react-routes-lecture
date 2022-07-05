import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import md5 from "md5";

export const ContentItem = () => {
  const [contentItems, setContentItems] = useState([]);

  const paramRoutes = useParams();

  useEffect(() => {
    getAllComics();
  }, []);

  const type = Object.keys(paramRoutes)[0].slice(0, -2);

  const param =
    paramRoutes.charactersID || paramRoutes.comicsID || paramRoutes.eventsID;

  const getAllComics = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/${type}/${param}?ts=${
          process.env.REACT_APP_TS
        }&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${md5(
          process.env.REACT_APP_TS +
            process.env.REACT_APP_PRIVATE_KEY +
            process.env.REACT_APP_PUBLIC_KEY
        )}`
      )
      .then((res) => res.data)
      .then((res) => {
        if (res.data.results) {
          setContentItems(res.data.results[0]);
        }
      });
  };

  return (
    <>
      <div>{contentItems.name}</div>
      <div>{contentItems.description}</div>
    </>
  );
};
