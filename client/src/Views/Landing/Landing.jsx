import style from "../Landing/Landing.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className={style.container}>
        <div className="landingfont">
          <h2> Welcome to Knight's Quest</h2>
          <Link to="/home">
            <button className="buttonLanding">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
