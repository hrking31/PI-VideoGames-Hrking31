import style from "../Card/Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div className={style.card}>
        <div className={style.cardBody}>
          <Link to={`/detail/${props.id}`}>
            <h2 className={style.name}>{props.name}</h2>
          </Link>
          <h2> Genres:{props.genres}</h2>
          {<h2> Creado en:{props.created}</h2>}
          {<h2> Id:{props.id}</h2>}
          {<h2> Genero:{props.genres}</h2>}
          {<h2>clasificación{props.rating}</h2>}
        </div>
        <div className={style.cardImage}>
          <img src={props.image} alt="img not found" />
        </div>
      </div>
    </div>
  );
}
