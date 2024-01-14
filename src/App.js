

// axios
import axios from 'axios';

// HOC

//Component
import DefaultLayout from "./layout/DefaultLayout"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route} from "react-router-dom"
import NavBar from './Components/navbar/NavBar';
import MovietLayout from './layout/MovieLayout';
import MovieHero from './Components/movieHero/MovieHero.component';
import Plays from './Components/pages/Plays';


// // axios default settins
// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>

      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<DefaultLayout/>} />
        <Route path="/movie" element={<MovietLayout/>} />
        <Route path="/plays" element={<Plays />} />
        <Route path="/movie/:id" element={<MovieHero/>} />


      </Routes>
        {/* <PlaysLayout exact path="/plays/:123" /> */}
    </>
  )
}

export default App;