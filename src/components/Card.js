import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  console.log(data);

  if (data === null) {
    return null;
  }

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        }
        return (
          <div className="card" key={index}>
            <img src={curItem.urlToImage} alt="images" />
            <div className="content">
              <a onClick={() => window.open(curItem.url)} className="title">
                {curItem.title}
              </a>
              <p>{curItem.description}</p>
              <button onClick={() => window.open(curItem.url)}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
