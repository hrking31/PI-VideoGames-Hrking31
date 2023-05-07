import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={style.nav}>
      <div className={style.navButtons}>
        <Link to="/create">
          <button>Form</button>
        </Link>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
