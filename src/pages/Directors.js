import { useEffect, useState } from "react";
import Director from "../components/Director";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((d) => {
          return <Director key={d.id} name={d.name} movies={d.movies} />;
        })}
      </main>
    </>
  );
}

export default Directors;