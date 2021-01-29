import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import s from "./Pokemon.module.css";

function Pokemon(props) {
  return (
    <div className={s.main}>
      <NavLink to={`/Profile/${props.name}`} className={s.NavLink}>
        <div className={s.name}>{props.name}</div>
      </NavLink>
    </div>
  );
}

export default Pokemon;
