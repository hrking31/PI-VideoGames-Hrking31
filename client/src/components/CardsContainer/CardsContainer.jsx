import style from "../CardsContainer/CardsContainer.module.css";
import React from "react";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  const videogames = useSelector((state) => state.videogames);
  const numPage = useSelector((state) => state.numPage);

  const itemsPage = 15;
  let initial = (numPage - 1) * itemsPage;
  let finish = initial + itemsPage;
  let cantPages = Math.floor(videogames.length / 15);

  let viewVideogames = videogames.slice(initial, finish);

  return (
    <div>
      <div className={style.cards_container}>
        {viewVideogames &&
          viewVideogames.map((videogame) => {
            return (
              <Card
                id={videogame.id}
                name={videogame.name}
                image={videogame.image}
                genres={videogame.genres}
                created={videogame.created}
                rating={videogame.rating}
                released={videogame.released}
                key={videogame.id}
              />
            );
          })}
      </div>
      <div>
        <Paginate cantPages={cantPages} />
      </div>
    </div>
  );
}
