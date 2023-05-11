import style from "../CardsContainer/CardsContainer.module.css";
import React from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  orderCards,
  orderGenres,
  orderRating,
  reset,
} from "../../redux/actions";

export default function CardsContainer() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);

  function handlerOrder(event) {
    event.preventDefault();
    const { value } = event.target;
    dispatch(orderCards(value));
  }

  function handlerGenres(event) {
    event.preventDefault();
    const { value } = event.target;
    dispatch(orderGenres(value));
  }

  function handlerRating(event) {
    event.preventDefault();
    const { value } = event.target;
    dispatch(orderRating(value));
  }

  function resetButton() {
    dispatch(reset());
  }

  return (
    <div>
      <div className={style.cards_container}>
        <select onChange={handlerOrder} name="order" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>
            Select order
          </option>
          <option value="A">A</option>
          <option value="D">D</option>
        </select>

        <select onChange={handlerGenres} name="genres" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>
            {" "}
            Select filter
          </option>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
          <option value="Indie">Indie</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Platformer</option>
          <option value="Racing">Racing</option>
          <option value="Multiplayer">Massively Multiplayer</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Board">Board Games</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
        </select>

        <select onChange={handlerRating} name="rating" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>
            Selector rating
          </option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>

        <button onClick={resetButton}>RESET</button>

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
                released={videogame.released}
                key={videogame.id}
              />
            );
          })}
      </div>
    </div>
  );
}
