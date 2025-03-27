import React from "react";

const Heading = ({ heading }) => {
console.log(heading)

  if (!heading || heading.Heading.length === 0) {
    return (
      <div className="error">
        <p>Error: No heading data available</p>
      </div>
    );
  }

  return (
    <>
      {heading.Heading.length > 0 &&
        heading.Heading.map((heading, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center space-y-1 items-center font-sans"
          >
            <h2 className="text-2xl text-wrap text-center">
              {heading.headingboldtype.headingtextArray.map((part, i) =>
                part.isbold ? <b key={i}>{part.headingtext}</b> : part.headingtext
              )}
            </h2>
            <p className=" text-center w-[50%]">{heading.description}</p>
          </div>
        ))}
    </>
  );
};

export default Heading;
