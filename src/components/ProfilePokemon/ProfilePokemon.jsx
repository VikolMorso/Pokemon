import React from "react";
import { connect } from "react-redux";
import s from "./ProfilePokemon.module.css";

function ProfilePokemon(props) {
  if (!props.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.main}>
      <div className={s.photo__pokemon}>
        <img
          src={
            props.sprites.other.dream_world.front_default === null
              ? props.sprites.other["official-artwork"].front_default
              : props.sprites.other.dream_world.front_default
          }
          alt="image pokemon"
          className={s.photo}
        />
      </div>
      <div className={s.about__pokemon}>
        <div>
          <b>Name pokemon: </b>
          {props.name}
        </div>
        <div>
          <b>Order: </b>
          {props.order}
        </div>
        <div>
          <b>Weight: </b>
          {props.weight}
        </div>
        <div>
          <b>Forms:</b>
          <ul>
            {props.forms.map((f) => (
              <li>{f.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <b>Abilities:</b>
            <ul>
              {props.abilities.map((a) => (
                <li>
                  {a.ability.name}({a.is_hidden ? "hidden" : "not hidden"}){" "}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <b>Moves:</b>
            <ul>
              {props.moves.map((m) => (
                <li>{m.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePokemon;
