import { useState, useEffect } from "react";
import List from "./components/List";
import { fetchMovies } from "./utils/Api";
function App() {
  const [movie, setMovie] = useState([]);
  const [stext, setstext] = useState("batman");
  useEffect(() => {
    fetchMovies(
      `https://www.omdbapi.com/?i=tt3896198&apikey=44d91aee&s=batman`
    ).then((data) => setMovie(data));
  }, []);

  const show = () => {
    fetchMovies(
      `https://www.omdbapi.com/?i=tt3896198&apikey=44d91aee&s=${stext}`
    ).then((data) => setMovie(data));
  };
  const showChange = (event) => {
    setstext(event.target.value);
  };
  return (
    <div>
      <div className="container mt-5 mb-5 ">
        <div className="row justify-content-center">
          <div className="input-group mx-auto ">
            <input
              value={stext}
              onChange={showChange}
              className="form-control"
              placeholder="Search movies/series"
              name="name"
              type="text"
            />
            <button type="button" class="btn btn-secondary" onClick={show}>
              Search
            </button>
          </div>
        </div>
      </div>
      <List movie={movie} />
    </div>
  );
}

export default App;
