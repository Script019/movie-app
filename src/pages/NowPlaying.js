import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "d54943154eb73054e6d3b296932eca3a"; // Replace with your API key
  const API_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log("Error fetching trending movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="now-playing-container">
      <h1>Trending Movies 🎬</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name} // Some API results have `name` instead of `title`
            />
            <h3>{movie.title || movie.name}</h3>
            <p>{movie.overview.substring(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
