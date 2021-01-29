import React from "react";
import preloader from "../img/preloader.gif";
import s from "./Common.module.css";

let Preloader = (props) => {
  return <img src={preloader} alt="preloader" className={s.preloader} />;
};
export default Preloader;
