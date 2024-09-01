import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        return (
          <div className="card">
            <img src={curItem.urlToImage} />
            <div className="cardContent">
              <a href="/">{curItem.title}</a>
              <p>{curItem.description}</p>
              <button>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
