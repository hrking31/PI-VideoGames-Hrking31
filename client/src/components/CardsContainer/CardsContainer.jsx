import style from "../CardsContainer/CardsContainer.module.css";
import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  const videogames = useSelector((state) => state.videogames);
  return (
    <div>
      <div className={style.cards_container}>
        {videogames &&
          videogames.map((videogame) => {
            return (
              <Card
                id={videogame.id}
                name={videogame.name}
                image={videogame.image}
                genres={videogame.genres}
                created={videogame.created}
                rating={videogame.rating}
                key={videogame.id}
              />
            );
          })}
      </div>
    </div>
  );
}
