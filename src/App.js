

// axios
import axios from 'axios';

// HOC

//Component
import DefaultLayout from "./layout/DefaultLayout"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Components/pages/Home.page';
import {Routes, Route} from "react-router-dom"
import NavBar from './Components/navbar/NavBar';
import DefaultHOC from './HOC/DefaultHOC';
import HeroCarousel from './Components/HeroCarousel/HeroCarousel';



// // axios default settins
// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<DefaultLayout/>} />
      </Routes>
        {/* <PlaysLayout exact path="/plays/:123" /> */}
    </>
  )
}

export default App;