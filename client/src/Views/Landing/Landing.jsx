import style from "../Landing/Landing.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Welcome to King of Games</h1>
        </div>
        <Link to="/home">
          <button className={style.button}>START</button>
        </Link>
      </div>
    </div>
  );
}
