import React from "react";

const Customcard = () => {
  const cards_json = {
    cards: [
      {
        heading: "Join our Community to Build Wealth with Knowledge",
        description:
          "Have questions? Get answers and discuss financial strategies with like-minded individuals.",
        cta: "Join our Community Now",
        investment_card: {
          title: "What are the best investment strategies for beginners?",
          author: "Manish Kumar",
          responses: 102,
          button_text: "Respond",
        },
      },
      {
        heading: "Earn Your Financial Literacy Certificate",
        description:
          "Complete the program, pass the assessment, and receive a verified certificate to showcase your expertise in financial literacy.",
        cta: "Join our Community Now",
        investment_card: {
          title: "Start Learning Today",
          author: "",
          responses: 0,
          button_text: "",
        },
      },
    ],
  };

  return (
    <div className="m-2 flex flex-col md:flex-row gap-8 items-stretch">
      <div className="community-card flex flex-col rounded-[3rem] gap-16 p-16 flex-1 bg-[#ededf0]">
        <div className="community-content flex flex-col items-start gap-3">
          <div className="community-heading">
            <h2 className="font-bold text-3xl text-gray-800">
              Join our Community to
            </h2>
            <p className="text-3xl text-gray-800">
              Build Wealth with Knowledge
            </p>
          </div>

          <div className="community-description mb-3 w-[80%]">
            <span className="text-gray-600 text-md">
              Have questions? Get answers and discuss financial strategies with
              like-minded individuals.
            </span>
          </div>

          <div className="communityCta">
            <button className="py-4 px-6 bg-[#2a2e34] text-white rounded-full">
              Join our Community Now
            </button>
          </div>
        </div>

        <div className="community-investment-card w-full">
          <div className="bg-white p-4 rounded-2xl shadow-md md:w-80 mx-auto">
            <div className="mb-4">
              <h3 className="text-lg text-gray-900">
                What are the best investment strategies for beginners?
              </h3>
            </div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <div>
                <span className="block text-xs">Author</span>
                <h3 className="font-medium">Manish Kumar</h3>
              </div>
              <div>
                <p>102 Responses</p>
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg ">
                Respond
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="community-card flex flex-col-reverse rounded-[3rem] gap-16 p-16 flex-1 bg-[#ededf0]">
        <div className="community-content flex flex-col items-start gap-3">
          <div className="community-heading w-full">
            <h2 className="text-2xl text-gray-800 md:text-nowrap">
              Earn Your{" "}
              <span className="font-bold text-3xl text-gray-800">
                Financial Literacy Certificate
              </span>
            </h2>
          </div>

          <div className="community-description mb-3">
            <span className="text-gray-600 text-md">
              Complete the program, pass the assessment, and receive a verified
              certificate to showcase your expertise in financial literacy.
            </span>
          </div>

          <div className="communityCta">
            <button className="py-4 px-6 bg-[#2a2e34] text-white rounded-full">
              Join our Community Now
            </button>
          </div>
        </div>

        <div className="community-investment-card w-full">
          <div className="bg-white md:mx-12 rounded-2xl shadow-sm flex justify-center items-center md:w-86 h-60">
            <span className="cc font-normal text-md">
              Start Learning Today
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customcard;
