import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import axios from "axios";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const About = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=984db5e8e7bd513ab4c76c37a6e2cb79");
        const popularMovies = response.data.results;
        const randomIndex = Math.floor(Math.random() * popularMovies.length);
        const selectedMovie = popularMovies[randomIndex];
        setRandomMovie(selectedMovie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <Container>
      <div className="aboutContainer">
        <div className="aboutContent">
          <h1 className="aboutTitle">About Us</h1>
          <p className="aboutText">
            Welcome to our site about films - a source for real cinephiles and connoisseurs of cinema art! Here you will find all the information you
            need about the latest films, classics and hidden cinematic gems. We aim to be your trusted guide to the world of cinema by providing the
            most complete and comprehensive film information available. Our database contains thousands of movies from different genres including
            drama, comedy, fantasy, horror, adventure and more. Each movie comes with detailed descriptions, ratings, reviews and trailers to help you
            make the right choice before watching. Stay up to date with the latest in the film industry with our regularly updated articles and news.
            You can also learn about upcoming premieres, interesting projects and prestigious film festivals. We have handy search and filter features
            so you can easily find the movies of your choice. You can sort movies by release year, rating, actors, directors, and more. Join our
            filmophile community, discuss your favorite films, share recommendations and read other users' opinions. We believe that communication and
            exchange of impressions makes watching movies even more exciting and interesting. Don't miss the opportunity to immerse yourself in the
            fascinating world of cinema with our movie site. Enjoy watching!
          </p>
        </div>
        {randomMovie && (
          <div className="randomMovie">
            <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`} alt={randomMovie.title} className="randomMovieImage" />
            <div className="randomMovieDetails">
              <h3 className="randomMovieTitle">{randomMovie.title}</h3>
              <p className="randomMovieOverview">{randomMovie.overview}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <Copyright />
    </Container>
  );
};

export default About;
