import React from "react";
import { Search as SearchIcon, ExpandMore, Language } from "@material-ui/icons";

import "./Header.css";
import {Avatar} from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src={require("../../images/logo.png")}
        alt="Logo"
      />

      <div className="header_search">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_actions">
          <p>Become a host</p>
          <Language />
          <ExpandMore />
          <Avatar />
      </div>
    </div>
  );
};

export default Header;
