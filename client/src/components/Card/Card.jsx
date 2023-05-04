import style from "../Card/Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div className={style.card}>
        <div className={style.cardBody}>
          <h2> Name:{props.name}</h2>

          {<h2>{props.created}</h2>}
          {<h2>{props.id}</h2>}
          {<h2>{props.genres}</h2>}
          {<h2>{props.rating}</h2>}
        </div>
        <div className={style.cardImage}>
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}
