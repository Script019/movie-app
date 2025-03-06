import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Movie App 🎬</h1>
      <p>Discover movies, check out what’s playing, and leave reviews!</p>
      <Link to="/now-playing" className="btn">Browse Movies</Link>
    </div>
  );
};

export default Home;
