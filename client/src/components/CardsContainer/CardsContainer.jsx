import style from "../CardsContainer/CardsContainer.module.css";
import React from "react";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  const videogames = useSelector((state) => state.videogames);
  const numPage = useSelector((state) => state.numPage);

  let initial = (numPage - 1) * 15;
  let finish = numPage * 15;
  let cantPages = Math.floor(videogames.length / 15);

  let viewVideogames = videogames.slice(initial, finish);
  console.log("hola soy videogames", viewVideogames);
  console.log("hola soy paginas", cantPages);
  console.log("hola soy num paginas", numPage);
  console.log("hola soy num paginas", videogames.length);
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
        <Paginate>cantPages={cantPages}</Paginate>
      </div>
    </div>
  );
}
