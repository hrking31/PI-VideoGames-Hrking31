import React from "react";
import style from "../Paginate/Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";

export default function Paginate({ cantPages }) {
  const numPage = useSelector((state) => state.numPage);
  const dispatch = useDispatch();

  function next() {
    dispatch(nextPage());
  }

  function prev() {
    dispatch(prevPage());
  }

  return (
    <div className={style.paginate}>
      {numPage > 1 ? (
        <div>
          <button className={style.button} onClick={prev}>
            PREV
          </button>
          <p className={style.pageNumber}>{numPage - 1}</p>
        </div>
      ) : null}

      <h3 className={style.pageNumber}>{numPage}</h3>

      {numPage < cantPages ? (
        <div>
          <p className={style.pageNumber}>{numPage + 1}</p>
          <button className={style.button} onClick={next}>
            NEXT
          </button>
        </div>
      ) : null}
    </div>
  );
}
