import axios from "axios";
import style from "../Form/Form.module.css";
import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    rating: "",
    release: "",
    img: "",
    description: "",
    genres: [],
    platforms: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    rating: "",
    release: "",
    img: "",
    description: "",
    genres: [],
    platforms: [],
  });

  //------>>>//--REGEX--//<<<------//
  const noEmpty = /\S+/; //------>>>//--Espacios en Blanco--//<<<------//
  const validateName = /^.{5,200}$/; //------>>>//--Rango de 5 a 200--//<<<------//
  const validateNum = /^[1-5]+([.][1-5]+)?$/; //------>>>//--Rango de enteros entre 1-5 o flotantes de  1-5--//<<<------//
  const validateUrl = /(https?:\/\/.*\.(?:png|jpg))/i; //------>>>//--Inicie https y termine . png o jpg--//<<<------//
  const validateFechas = /^\d{4}\/\d{2}\/\d{2}$/; //------>>>//--4 caracteres luego dos y luego dos--//<<<------//
  const validatePalabras = /^.{5,100}$/; //------>>>//--Rango entre 5 - 100--//<<<------//

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
    let newErrors = {};

    newErrors.name =
      !noEmpty.test(form.name) ||
      !validateName.test(form.name) ||
      form.name.length < 5
        ? "Name required. more than 5 characters"
        : "";

    newErrors.rating =
      !validateNum.test(form.rating) || parseInt(form.rating) < 1
        ? "Number required. Higher than 1"
        : "";

    newErrors.released =
      !validateFechas.test(form.released) || parseInt(form.released) < 1
        ? "Release required. YYYY/MM/DD"
        : "";

    newErrors.description =
      !validatePalabras.test(form.description) || parseInt(form.description) < 1
        ? "Description required. Higher than 5 characters and less than 100 "
        : "";

    newErrors.image = !validateUrl.test(form.image) ? "URL required" : "";

    setErrors({ ...errors, ...newErrors });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  // name, description, platforms, image, released, rating, genres;

  return (
    <form onSubmit={submitHandler}>
      <div className={style.form_container}>
        <div className={style.title}>
          <h1>Create Videogame</h1>
        </div>
        <div>
          <label>NAME</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={changeHandler}
            placeholder="  Name"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={changeHandler}
            placeholder="  Rating"
          />
          {errors.rating && <span>{errors.rating}</span>}
        </div>

        <div>
          <label>Release</label>
          <input
            type="text"
            name="released"
            value={form.released}
            onChange={changeHandler}
            placeholder="  Release"
          />
          {errors.released && <span>{errors.released}</span>}
        </div>

        <div>
          <label>Image</label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={changeHandler}
            placeholder="URL Image..."
          />
          {errors.image && <span>{errors.image}</span>}
        </div>

        <div className={style.img}>
          <img
            src={form.image}
            alt=""
            style={{ width: "200px", height: "auto" }}
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={changeHandler}
            placeholder="  Description"
          />
          {errors.description && <span>{errors.description}</span>}
        </div>

        <div>
          <label>Select Genre</label>
          <input></input>
        </div>

        <div>
          <label>Select Platform</label>
          <input></input>
        </div>
        <button className={style.button} type="submit">
          CREATE !!!
        </button>
      </div>
    </form>
  );
}
