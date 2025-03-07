import React from "react";
import "./App.css";
import TopFold from "./components/TopFold";
import Header from "./components/Header";
import Brandintigration from "./components/Brandintigration";
import TrendingNfts from "./components/TrendingNfts";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CreateNFT from "./Pages/CreateNFT";
import ExploreNFT from "./Pages/ExploreNFT";
import ProfileNFT from "./Pages/ProfileNFT";

const App = () => {
  return (
    <div className="max-width">
      <Navbar />
      <Header />
      <TopFold />
      <Brandintigration />
      <TrendingNfts />
      <InfoSection />
      <Footer />

      <CreateNFT />
      <ExploreNFT />
      <ProfileNFT />
    </div>
  );
};

export default App;
