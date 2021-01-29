import React, { Component } from "react";
import s from "./PageWelcome.module.css";

function PageWelcome(props) {
  return (
    <div className={s.main}>
      <h1>Welcome!</h1>
      <p>In this application You can see information about Pokemon</p>
    </div>
  );
}

export default PageWelcome;
