import React, { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

 const ApiProvider = ({ children }) => {
  const [PopularMovie, setPopularMovie] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [TopRatedMovie, setTopRatedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "27686585f73b546ff5ecdbb27242c80c";
  const BASE_URL = "https://api.themoviedb.org/3/movie";

  // ✅ Generalized API Fetch Function
  const fetchMovies = async (endpoint, setter) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setter(data.results);
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ Fetch All Movie Categories
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchMovies("popular", setPopularMovie),
      fetchMovies("now_playing", setNowPlaying),
      fetchMovies("upcoming", setUpcomingMovies),
      fetchMovies("top_rated", setTopRatedMovie),
    ]).then(() => setLoading(false));
  }, []);

  return (
    <ApiContext.Provider value={{ PopularMovie, NowPlaying, UpcomingMovies, TopRatedMovie, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};


export default ApiProvider