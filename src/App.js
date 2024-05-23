// axios
import axios from "axios";

// HOC

//Component
import MovieLayout from "./layout/MovieLayout";
import DefaultLayout from "./layout/DefaultLayout";
import PlaysLayout from "./layout/PlaysLayout";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/Sign-in/SignIn";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.API_KEY;

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/movies" element={<MovieLayout />} />
      <Route path="/plays" element={<PlaysLayout />} />      
      <Route path="/signin" element={<SignIn />} />      
     </Routes>
    </>
  );
}

export default App;
