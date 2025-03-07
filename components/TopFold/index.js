import React from "react";
import Button from "../../common/Button";
import "./topFold.css";

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover, Collect, & Sell{" "}
          <span className="heading-gradient">Extraordinary</span> NFTs
        </div>
        <div className="tf-description">
          The world's first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs)
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button
            btnType="SECONDARY"
            btnText="CREATE"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infostats">
          <div className="tf-infoitem absolute-center">
            <div className="tf-item-count">200K+</div>
            <div className="tf-item-label">Collection</div>
          </div>
          <div className="tf-infoitem absolute-center">
            <div className="tf-item-count">10K+</div>
            <div className="tf-item-label">Artists</div>
          </div>
          <div className="tf-infoitem absolute-center">
            <div className="tf-item-count">426K+</div>
            <div className="tf-item-label">Cummunity</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/9d6168e731afd02d5e878eb03876cfd4.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/8a1b2a16ab83828fe3164cbc1da63cb3.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/b5e196a45c4d7302102185d511d5886b.png?auto=format&dpr=1&w=512"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
