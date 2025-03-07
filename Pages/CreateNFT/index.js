// components/create.js
import React, { useState } from "react";
import "./create.css";

const CreateNFT = () => {
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [nftPrice, setNftPrice] = useState("0.00");
  const [nftImage, setNftImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNftImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle NFT creation logic here
    console.log({ nftName, nftDescription, nftPrice, nftImage });
  };

  return (
    <div className="create-nft-container">
      <h1>Create NFT</h1>
      <p>Create and mint your unique digital assets</p>
      <form onSubmit={handleSubmit}>
        <div className="upload-section">
          <label htmlFor="image-upload">
            {nftImage ? (
              <img src={nftImage} alt="NFT Preview" className="nft-preview" />
            ) : (
              <div className="upload-placeholder">
                Drop your image here or click to browse
              </div>
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter NFT name"
            value={nftName}
            onChange={(e) => setNftName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Describe your NFT..."
            value={nftDescription}
            onChange={(e) => setNftDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price (ETH)</label>
          <input
            type="number"
            placeholder="0.00"
            value={nftPrice}
            onChange={(e) => setNftPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="create-nft-button">
          Create NFT
        </button>
      </form>
    </div>
  );
};

export default CreateNFT;
