import React from "react";
import { Link } from "react-router-dom";
import useTimer from "../hooks/useTimer";

export default function NavBar() {
  const timer = useTimer(new Date());
  return (
    <nav>
      <span className="nav__logo">LOGO</span>
      <div className="nav__links">
        <Link to="/add">Add</Link>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </div>
      <h4>
        {timer.getHours()}:{timer.getMinutes()}:{timer.getSeconds()<10 && "0" }
        {timer.getSeconds()}
      </h4>
    </nav>
  );
}
