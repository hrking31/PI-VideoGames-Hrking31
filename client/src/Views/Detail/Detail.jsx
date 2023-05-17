import style from "../Detail/Detail.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesById } from "../../redux/actions";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.detailVideogames);

  useEffect(() => {
    dispatch(getVideogamesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className={style.button}>
        <Link to="/">
          <button>Landing</button>
        </Link>
        <Link to="/Home">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Form</button>
        </Link>
      </div>
      <div className={style.container_Detail}>
        {/* <div className={style.name}>
          <h1>{videogame.name}</h1>
        </div> */}
        <div className={style.container_Info}>
          <div className={style.info_Videogame}>
            <div>
              <div className={style.name}>
                <h1>{videogame.name}</h1>
              </div>
              <h3>{videogame.release}</h3>
              <h4>RELEASED</h4>
              <h3>{videogame.rating}</h3>
              <h4>RATING</h4>
              <h3>{videogame.genred}</h3>
              <h4>GENRES</h4>
              <h3>{videogame.platforms}</h3>
              <h4>PLATFORMS</h4>
              {/* <h4>{videogame.description}</h4> */}
              <div
                dangerouslySetInnerHTML={{ __html: videogame.description }}
              ></div>
              <h4>DESCRIPTION</h4>
            </div>
            <div className={style.img_Videogame}>
              <img src={videogame.image} alt="img not found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
