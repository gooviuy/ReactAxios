import axios from "axios";
import { useEffect, useState } from "react";
import "./films.css";

export default function Films({ showFilm }) {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios
      .get("https://private.omdbapi.com/?apikey=bef9c583&t=" + showFilm)
      .then((result) => {
        setFilm(result.data);
      });
  }, [showFilm]);

  if (!film) {
    return <div>Loading film...</div>;
  }
}
