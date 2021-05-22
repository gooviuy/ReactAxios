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
  const { Title, Year, imdbRating, Poster } = film;
  let color;
  let calificacion;
  if (imdbRating >= 7.5) {
    color = "green";
    calificacion = "Excelent";
  } else {
    color = "red";
    calificacion = "Bad";
  }

  return (
    <div className="tarjet">
      <div className="title">
        {Title} ({Year})
      </div>
      <div className="rating" style={{ backgroundColor: color }}>
        {calificacion}
      </div>
      <div>
        <img src={Poster} alt={Title} width={190} />
      </div>
    </div>
  );
}
