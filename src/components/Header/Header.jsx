import React from "react";
import s from "./Header.module.css";

function Header(props) {
  return (
    <div className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
        alt="logo"
        className={s.logo}
      />
    </div>
  );
}
export default Header;
