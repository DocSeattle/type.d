import Navigation from "../components/Navigation.tsx";
import Background from "../components/Background.tsx";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <Background />
      <div>
        <Navigation />
        <div className="Hero">
          <h1>Welcome to Type.d<span className="cursor">|</span></h1>
          <hr />
          <p>This is a project made for school, it's a typing test game made in React+TS</p>
          <p>Use the navigation at the top to continue!</p>
          <h4 className="important">README</h4>
          <p>Due to some limitations of this webhotel, I am unable to host nodejs applications.</p>
          <p>
            Meaning no backend I might make would work.
          </p>
          <p>
            As such the register/login features as well as the intended
            leaderboard functions have not been made or much worked on.
          </p>
        </div>
      </div >
    </>
  )
}
