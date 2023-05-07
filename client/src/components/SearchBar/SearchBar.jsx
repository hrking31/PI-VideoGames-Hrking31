import style from "../SearchBar/SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogame } from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onSearch = () => {
    dispatch(getVideogame(name));
  };

  return (
    <div className={style.searchBar}>
      <input
        className={style.search}
        onChange={handleChange}
        type="search"
        name="search"
        value={name}
        placeholder="Enter name..."
      />
      <button className={style.buttonSearch} onClick={() => onSearch(name)}>
        Search
      </button>
    </div>
  );
}
