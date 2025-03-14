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
        </div>

      </div>
    </>
  )
}
