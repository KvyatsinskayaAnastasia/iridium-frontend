import React from "react";
import s from './Header.module.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.link}>
        <Link to="/library"><b>Библиотека</b></Link>
      </div>
      <div className={s.link}>
        <Link to="/profile"><b>Профиль</b></Link>
      </div>
    </header>
  )
}

export default Header;