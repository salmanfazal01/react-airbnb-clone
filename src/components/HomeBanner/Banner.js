import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DatePicker from "../DatePicker/DatePicker";
import "./Banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <DatePicker />}
        <Button
          variant="outlined"
          className="banner_searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
