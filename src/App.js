

// axios
import axios from 'axios';

// HOC
import DefaultHOC from './HOC/DefaultHOC';
import MovieHOC from './HOC/MovieHOC';

//Component
import DefaultLayout from './layout/DefaultLayout';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Components/pages/Home.page';
import MoviePage from './Components/pages/MoviePage'
import NavBar from './Components/navbar/NavBar';

// axios default settins
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



function App() {
  return (
    <>
    <DefaultLayout>
        <DefaultHOC exact path="/" element={<HomePage />} />
    </DefaultLayout>
        <MovieHOC path="/movie/:id" element={<MoviePage />} />

        {/* <PlaysLayout exact path="/plays/:123" /> */}
    </>
  )
}

export default App;