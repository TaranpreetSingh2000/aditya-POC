"use client";
import React from "react";

const Teaser = ({ teasers, endPointUrl }) => {
  if (!teasers || teasers.length === 0) return <p>No teaser data available.</p>;

  return (
    <div className="p-12 w-full h-fit bg-slate-200">
    {teasers.map((teaser, index) => (
      <div key={index} className="flex items-center even:flex-row-reverse justify-between w-full gap-10 mb-10">
      <div className="teaser-image">
        {teaser.bannerImage?.length > 0 && (
          <img
            src={`${endPointUrl}${teaser.bannerImage[0].url}`}
            alt={teaser.heading || "Teaser Image"}
            className="w-[80%]"
          />
        )}
      </div>

      <div className="teaser-content flex flex-col gap-6">
        <div className="heading-description font-sans">
          <h3 className="text-5xl mb-4 text-gray-600 font-bold">{teaser.heading}</h3>

          {teaser.description?.map((desc, index) => (
            <span key={index} className="text-gray-800 text-sm">
              {desc.children?.[0]?.text || ""}
            </span>
          ))}
        </div>

        {teaser.buttontext && (
          <div className="cta">
            <button className="p-3 bg-gray-700 text-white">{teaser.buttontext}</button>
          </div>
        )}
      </div>
      </div>
    ))}
    </div>
  );
};

export default Teaser;
