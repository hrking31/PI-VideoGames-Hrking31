import React from "react";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import genres from "../../utils/arrayGenres";
import {
  orderName,
  orderGenres,
  orderRating,
  orderCreated,
  reset,
} from "../../redux/actions";

export default function NavBar(props) {
  const dispatch = useDispatch();

  function handlerOrder(event) {
    event.preventDefault();
    const { value } = event.target;
    dispatch(orderName(value));
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

  function handlerCreated(event) {
    event.preventDefault();
    const { value } = event.target;
    dispatch(orderCreated(value));
  }

  function resetButton() {
    dispatch(reset());
  }

  return (
    <div className={style.nav}>
      <select onChange={handlerOrder} name="name" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Name
        </option>
        <option value="asc">A</option>
        <option value="desc">D</option>
      </select>

      <select onChange={handlerGenres} name="genres" defaultValue="DEFAULT">
        {genres.map((genre) => (
          <option
            key={genre.value}
            value={genre.value}
            disabled={genre.disabled}
          >
            {genre.label}
          </option>
        ))}
      </select>

      <select onChange={handlerRating} name="rating" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Rating
        </option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>

      <select onChange={handlerCreated} name="created" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Created
        </option>
        <option value="true">Database</option>
        <option value="false">Api</option>
      </select>

      <button onClick={resetButton}>RESET</button>

      <div className={style.navButtons}>
        <Link to="/">
          <button>Landing</button>
        </Link>
        <Link to="/create">
          <button>Form</button>
        </Link>
      </div>

      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
