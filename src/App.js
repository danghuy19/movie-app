import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./App.scss";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "http://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const onSearch = (e) => {
    var { value } = e.target;
    setSearchTerm(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <>
      <header className="header">
        <form onSubmit={onSubmit}>
          <input
            type="search"
            name="searchTerm"
            value={searchTerm}
            onChange={onSearch}
            placeholder="Search..."
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie data={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default App;
