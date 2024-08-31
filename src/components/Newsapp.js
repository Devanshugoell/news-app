import Card from "./Card";
import React, { useState } from "react";
import SearchIcon from "./search.png";
import "./Newsapp.css";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "5f7c773236d1413882ddbf7903e27fae";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    setNewsData(data.articles);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>TRENDY NEWS</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={getData}>
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
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;
