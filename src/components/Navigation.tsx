import { NavLink } from "react-router";
import "./Navigation.scss";
import Register from "./Register";
import { useState } from "react";

export default function Navigation() {
  const Nav = {
    home: "/home",
    solo: "/solo",
    store: "/store",
    login: "/login",
    settings: "/settings"
  }
  const [widget, toggleWidget] = useState(true);
  return (
    <>
      <nav>
        <div className="left">
          <NavLink to={Nav.home}>Type.d<span className="cursor">|</span> </NavLink>

        </div>
        <div className="middle">
          <NavLink to={Nav.solo}>Solo Mode<span className="cursor">|</span></NavLink>
          <NavLink to="{Nav.solo}">Store<span className="cursor">|</span></NavLink>

        </div>
        <div hidden={widget} className="secondMiddle">
          <Register />
        </div>
        <div className={`right ${widget ? "ml" : ""}`}>
          <a href="#" onClick={() => toggleWidget(!widget)}>Login<span className="cursor">|</span>
          </a>
          <a href={Nav.settings}>Settings<span className="cursor">|</span> </a>
        </div>
      </nav>
    </>
  )
}
