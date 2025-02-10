import "./Navigation.scss";

export default function Navigation(){
    const Nav = {
       home: "#", 
       solo: "#",
       versus:"#",
       leader:"#",
       login: "#",
       settings: "#"
    }
    return (
        <>
            <nav>
                <div className="left">
                  <a href={Nav.home}>Type.d <span className="cursor">|</span> </a>

                </div>
                <div className="middle">
                  <a href={Nav.solo}>Solo Mode <span className="cursor">|</span></a>
                  <a href={Nav.versus}>Versus Mode <span className="cursor">|</span></a>
                  <a href={Nav.leader}>Leaderboards <span className="cursor">|</span></a>

                </div>
                <div className="right">
                    <a href={Nav.login}>Login <span className="cursor">|</span> </a>
                    <a href={Nav.settings}>Settings <span className="cursor">|</span> </a>
                </div>
            </nav>
        </>
    )
}
