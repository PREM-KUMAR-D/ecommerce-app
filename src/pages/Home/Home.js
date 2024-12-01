import React from "react";
import HeaderButtons from "../../Components/HeaderButtons/HeaderButtons";
import Header from "../../Components/Header/Header";
import TourItem from "../../Components/TourItem/TourItem";
import Footer from "../../Components/Footer/Footer";
import "./Home.css"; // For global styles

const toursData = [
  { date: "JUL 16", place: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL 19", place: "TORONTO, ON", venue: "BUDWEISER STAGE" },
  { date: "JUL 22", place: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
  { date: "JUL 29", place: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
  { date: "AUG 2", place: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
  { date: "AUG 7", place: "CONCORD, CA", venue: "CONCORD PAVILION" },
];

const Home = () => {
  return (
    <div>
    <Header disableCart={false} headerButtonEnabled={true}></Header>


      <section id="tours" className="tours-container ">
        <h2 className="metal-mania text-center">TOURS</h2>
        {toursData.map((tour, index) => (
          <TourItem
            key={index}
            date={tour.date}
            place={tour.place}
            venue={tour.venue}
          />
        ))}
      </section>
      <Footer enableSocials={false}></Footer>
    </div>
  );
};

export default Home;
