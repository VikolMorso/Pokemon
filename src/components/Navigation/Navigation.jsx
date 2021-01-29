import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
function Navigation(props) {
  return (
    <div className={s.main}>
      <nav className={s.nav}>
        <ul className={s.nav__menu}>
          <li className={s.link}>
            <NavLink to="/MainPage" className={s.active}>
              Main Page
            </NavLink>
          </li>
          <li className={s.link}>
            <NavLink to="/Pokemons" className={s.active}>
              Pokemons
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
