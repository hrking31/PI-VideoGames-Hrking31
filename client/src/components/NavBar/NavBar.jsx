import style from "../NavBar/NavBar.module.css";
import React from "react";
import { useState } from "react";
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
  const [values, setValues] = useState({
    value1: "DEFAULT",
    value2: "DEFAULT",
    value3: "DEFAULT",
    value4: "DEFAULT",
  });

  function handlerOrder(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderName(value));
  }

  function handlerGenres(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderGenres(value));
  }

  function handlerRating(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderRating(value));
  }

  function handlerCreated(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderCreated(value));
  }

  function resetButton() {
    dispatch(reset());
    setValues({
      ...values,
      value1: "DEFAULT",
      value2: "DEFAULT",
      value3: "DEFAULT",
      value4: "DEFAULT",
    });
  }

  return (
    <div className={style.nav}>
      <select
        onChange={handlerOrder}
        name="name"
        value={values.value1}
        // defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Select Name
        </option>
        <option value="asc">AZ</option>
        <option value="desc">ZA</option>
      </select>

      <select onChange={handlerGenres} name="genres" value={values.value2}>
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

      <select
        onChange={handlerRating}
        name="rating"
        value={values.value3}
        // defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Select Rating
        </option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>

      <select
        onChange={handlerCreated}
        name="created"
        value={values.value4}
        // defaultValue={"DEFAULT"}
      >
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
