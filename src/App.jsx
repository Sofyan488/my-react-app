import React from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import RecentSearches from "./components/RecentSearches";
import Destinations from "./components/Destinations";
import RecommendedHolidays from "./components/RecommendedHolidays";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";          
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <SearchSection />

      <div className="main-content">
        <RecentSearches />
        <Destinations />
        <RecommendedHolidays />
        <Hotels />

      
      </div>

      <Footer />
    </div>
  );
}

export default App;
