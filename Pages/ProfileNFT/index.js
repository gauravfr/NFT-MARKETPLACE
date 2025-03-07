// components/Profile.js
import React from "react";
import "./profile.css";

const ProfileNFT = () => {
  const user = {
    name: "John Doe",
    walletAddress: "08:23:44...3679",
    collected: 12,
    created: 8,
    sold: 3,
    totalValue: "5.4 ETH",
  };

  const collection = [
    {
      id: 1,
      name: "Digital Genesis",
      creator: "by You",
      price: "1.6 ETH",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Cyber Symphony",
      creator: "by You",
      price: "3.5 ETH",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="profile-nft-container">
      <div className="profile-header">
        <h1>{user.name}</h1>
        <p>{user.walletAddress}</p>
        <button className="edit-profile-button">Edit Profile</button>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <h3>{user.collected}</h3>
          <p>Collected</p>
        </div>
        <div className="stat">
          <h3>{user.created}</h3>
          <p>Created</p>
        </div>
        <div className="stat">
          <h3>{user.sold}</h3>
          <p>Sold</p>
        </div>
        <div className="stat">
          <h3>{user.totalValue}</h3>
          <p>Total Value</p>
        </div>
      </div>
      <div className="my-collection">
        <h2>My Collection</h2>
        <div className="collection-grid">
          {collection.map((item) => (
            <div key={item.id} className="collection-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.creator}</p>
              <p>{item.price}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileNFT;
