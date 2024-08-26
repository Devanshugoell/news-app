import Card from "./Card";
import React from "react";
import SearchIcon from "./search.png";
import "./Newsapp.css";

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>TRENDY NEWS</h1>
        </div>
        <ul>
          <h1>ALL TREANDING NEWS</h1>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search News" />
          <button>
            <img src={SearchIcon} alt="search icon" />
          </button>
        </div>
      </nav>
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
