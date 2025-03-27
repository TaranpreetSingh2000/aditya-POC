import React from "react";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Content should come from your Strapi API
// const content = [
//   {
//     type: "paragraph",
//     children: [{ type: "text", text: "A simple paragraph" }],
//   },
// ];

const StyleHeading = ({styledata}) => {
    console.log(styledata[7].description)
  return <BlocksRenderer content={styledata[7].description} />;
};

export default StyleHeading;
// const StyleHeading = ({ styledata }) => {
//   console.log(styledata);
//   return (
//     <div className="w-full text-center my-6">
//       <h2>
//         {styledata.length > 0 &&
//           styledata.map((style, index) => (
//             style.hasBreakRow === true ? (
//               <span
//                 key={index}
//                 className={`${
//                   style.color === "Red" ? "text-red-600" : "text-black"
//                 } text-6xl`}
//               >
//                 {style.title}
//                 <br />
//               </span>
//             ) : (
//               <span
//                 key={index}
//                 className={`${
//                   style.color === "Red" ? "text-red-600" : "text-black"
//                 } text-6xl px-1`}
//               >
//                 {style.title}
//               </span>
//             )
//           ))}
//       </h2>
//     </div>
//   );
// };
