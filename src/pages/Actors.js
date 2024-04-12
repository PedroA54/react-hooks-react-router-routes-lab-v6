import { useEffect, useState } from "react";
import Actor from "../components/Actor";
import NavBar from "../components/NavBar";
function Actors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then(setActors);
  }, []);
  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((a) => {
          return <Actor key={a.id} name={a.name} movies={a.movies} />;
        })}
      </main>
    </>
  );
}

export default Actors;