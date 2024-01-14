import HeroCarousel from "../Components/HeroCarousel/HeroCarousel";
import "../../src/App.css";
// import NavBar from "../Components/navbar/NavBar";
import HomePage from "../Components/pages/Home.page";
import NavBar from "../Components/navbar/NavBar";
const DefaultLayout = (props) => {
  return (
    <>
      <NavBar />
      <HeroCarousel />
      <HomePage />
      {props.children}
    </>
  );
};

export default DefaultLayout;
