// axios
import axios from "axios";

// HOC

//Component
import MovietLayout from "./layout/MovieLayout";
import DefaultLayout from "./layout/DefaultLayout";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.API_KEY;



function App() {
  return (
    <>
      <Routes>
      
      <Route path="/" element={<DefaultLayout/>} />
      <Route path="/movie/:id" element={<MovietLayout/>} />
      </Routes>
      {/* <DefaultLayout path="/movie/:id" element={<MovieHero/>} /> */}
      {/* <DefaultLayout path="/" element={<HomePage />} /> */}
      {/* <MovietLayout /> */}
      {/* <PlaysLayout exact path="/plays/:123" /> */}
    </>
  );
}

export default App;
