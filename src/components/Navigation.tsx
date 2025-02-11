import { NavLink } from "react-router";
import "./Navigation.scss";

export default function Navigation(){
    const Nav = {
       home: "/home", 
       solo: "/solo",
       versus:"/vs",
       leader:"/leader",
       login: "/login",
       settings: "/settings"
    }
    return (
        <>
            <nav>
                <div className="left">
                  <NavLink to={Nav.home}>Type.d <span className="cursor">|</span> </NavLink>

                </div>
                <div className="middle">
                  <NavLink to={Nav.solo}>Solo Mode <span className="cursor">|</span></NavLink>
                  <NavLink to={Nav.versus}>Versus Mode <span className="cursor">|</span></NavLink>
                  <NavLink to={Nav.leader}>Leaderboards <span className="cursor">|</span></NavLink>

                </div>
                <div className="right">
                    <a href={Nav.login}>Login <span className="cursor">|</span> </a>
                    <a href={Nav.settings}>Settings <span className="cursor">|</span> </a>
                </div>
            </nav>
        </>
    )
}
