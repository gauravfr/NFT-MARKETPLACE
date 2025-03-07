// components/explore.js
import React from "react";
import "./explore.css";

const ExploreNFT = () => {
  const nfts = [
    {
      id: 1,
      name: "Cosmic Dreamscape by Stella Nova",
      price: "2.5 ETH",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Digital Genesis by Crypto Artist",
      price: "1.8 ETH",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Neural Network by Binary Visionary",
      price: "3.2 ETH",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Quantum Artifact by Digital Alchemist",
      price: "4.0 ETH",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Liberal Essence by Digital Dreamer",
      price: "2.7 ETH",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Cyber Symphony by Virtual Artist",
      price: "3.5 ETH",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="explore-nft-container">
      <h1>Explore NFTs</h1>
      <p>Discover unique digital assets from artists worldwide</p>
      <div className="search-bar">
        <input type="text" placeholder="Search NFTs..." />
      </div>
      <div className="filters">
        <h3>Filters</h3>
        {/* Add filter options here if needed */}
      </div>
      <div className="nft-grid">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <img src={nft.image} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>{nft.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreNFT;
