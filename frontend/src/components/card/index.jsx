"use client";
import React from "react";

const Card = ({ cards }) => {
  console.log(cards);

  if (!cards?.adityaCardComponent || cards.adityaCardComponent.length === 0) {
    return (
      <div className="error">
        <p>Error: No card data available</p>
      </div>
    );
  }

  return (
    <>
      {cards.adityaCardComponent.map((card, index) => (
        <div className="card flex flex-col items-start bg-gray-200 p-7 rounded-md" key={index}>
          <div className="card-content">
            <h3 className="font-bold text-3xl text-gray-700">{card.cardTitle}</h3>
            {card.cardDescription?.map((desc, i) => (
              <span key={i} className="text-gray-600 text-lg">
                {desc.children?.[0]?.text || ""}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
