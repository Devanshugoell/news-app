import Card from "./Card";
import React from "react";
import SearchIcon from "./search.png";
import "./Newsapp.css";

const Newsapp = () => {
  const API_KEY = "5f7c773236d1413882ddbf7903e27fae";

  return (
    <div>
      <nav>
        <div>
          <h1>TRENDY NEWS</h1>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search News" />
          <button>
            <img src={SearchIcon} alt="search icon" />
          </button>
        </div>
      </nav>
      <div>
        <p className="heading">Stay Updated With Trendy News</p>
      </div>
      <div className="categoryBtn">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
      <div className="cardComponets">
        <Card />
      </div>
    </div>
  );
};

export default Newsapp;
