import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import axios from "axios";
import Footer from "../components/Footer";
import Modal from "react-modal";
import Copyright from "../components/Copyright";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=984db5e8e7bd513ab4c76c37a6e2cb79");
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, []);

  const sortMovies = (movies, sortBy) => {
    switch (sortBy) {
      case "alphabetical":
        return movies.sort((a, b) => a.title.localeCompare(b.title));
      case "releaseDate":
        return movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      case "popularity":
        return movies.sort((a, b) => b.popularity - a.popularity);
      default:
        return movies;
    }
  };

  const filteredMovies = movies.filter((movie) => movie.poster_path !== null);
  const sortedMovies = sortMovies(filteredMovies, sortBy);

  const MovieDetails = ({ movie, onClose }) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

    return (
      <Modal isOpen={true} onRequestClose={onClose} className="movieModal" overlayClassName="modalOverlay">
        <h2 className="modaltitle">{movie.title}</h2>
        <p>{movie.overview}</p>
        <p className="modaldate">{movie.release_date}</p>
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={onClose} className="modalBtn">
            Close
          </button>
        </div>
      </Modal>
    );
  };

  return (
    <Container>
      <div className="title">
        <h1 className="titleMov">TMDb Movies</h1>
        <SearchBar setter={setMovies} />
        <div className="sortBy">
          <h3>Sort By:</h3>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="releaseDate">Release Date</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>

        <Grid className="contMovie">
          {sortedMovies.map((movie) => (
            <div key={movie.id} className="movieItem" onClick={() => setSelectedMovie(movie)}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width="200" height="auto" className="imgItem" />
              <h3 className="titleMovie">{movie.title}</h3>
            </div>
          ))}
        </Grid>
        {selectedMovie && <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
        <Footer />
      </div>
      <Copyright />
    </Container>
  );
};

export default Home;
