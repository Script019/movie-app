import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "d54943154eb73054e6d3b296932eca3a"; // Replace with your API key
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="now-playing-container">
      <h1>Now Playing 🎬</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview.substring(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
