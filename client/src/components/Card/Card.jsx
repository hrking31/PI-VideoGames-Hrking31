import style from "../Card/Card.module.css";
import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className={style.card}>
        <div className={style.cardBody}>
          <h2 className={style.name}>{props.name}</h2>

          {/* {<h2> Creado en:{props.created}</h2>}
          {<h2> Id:{props.id}</h2>}
          {<h2> Genero:{props.genres}</h2>}
          {<h2>clasificación{props.rating}</h2>} */}
        </div>
        <div className={style.cardImage}>
          <img src={props.image} alt="img not found" />
        </div>
      </div>
    </div>
  );
}
