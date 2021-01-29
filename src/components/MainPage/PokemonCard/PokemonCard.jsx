import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import s from "./PokemonCard.module.css";

function PokemonCard(props) {
  return (
    <div className={s.main}>
      <NavLink to={`/Profile/${props.name}`} className={s.NavLink}>
        <div>
          <div className={s.photo}>
            <img
              src={
                props.sprites.other.dream_world.front_default === null
                  ? props.sprites.other["official-artwork"].front_default
                  : props.sprites.other.dream_world.front_default
              }
              alt="image pokemon"
              className={s.photo__pokemon}
            />
          </div>
          <div className={s.name}>
            <div>Name Pokemon:</div>
            <div>{props.name}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default PokemonCard;
