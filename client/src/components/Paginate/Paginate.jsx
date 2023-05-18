import React from "react";
import style from "../Paginate/Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";

export default function Paginate(props) {
  const numPage = useSelector((state) => state.numPage);
  const dispatch = useDispatch();

  function next() {
    dispatch(nextPage());
  }

  function prev() {
    dispatch(prevPage());
  }

  // function handleButtonClick(num) {
  //   dispatch(changesPage(num));
  //   console.log("Botón " + num + " fue presionado.");
  // }

  return (
    <div className={style.paginate}>
      {numPage > 1 ? (
        <div className={style.paginationItems}>
          <div>
            <button className={style.button_paginate} onClick={prev}>
              PREV
            </button>
          </div>
          <div>
            <p className={style.pageNumber}>{numPage - 1}</p>
          </div>
        </div>
      ) : null}
      <h3 className={style.pageNumber}>{numPage}</h3>

      {numPage < props.cantPages ? (
        <div className={style.paginationItems}>
          <div>
            <p className={style.pageNumber}>{numPage + 1}</p>
          </div>
          <div>
            <button className={style.button_paginate} onClick={next}>
              NEXT
            </button>
          </div>
        </div>
      ) : null}

      {/* {Array.from({ length: cantPages }, (_, i) => (
        <button key={i} onClick={() => handleButtonClick(i + 1)}>
          {i + 1}
        </button>
      ))} */}
    </div>
  );
}
