import React from "react";

const Footer = () => {

  return (
    <footer className="bg-[#ededf0] py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0 text-[10px]">
          <div className="address-group space-y-1 mb-5">
            <h3 className=" text-[#414042] font-bold text-xs">
              ADITYA BIRLA CAPITAL DIGITAL LIMITED ("ABCDL"). CIN:
              U64990MH2023PLC399485, IRDAI Reg. No. CA0871, AMFI Reg. No.
              ARN-270149
            </h3>
            <p className="text-gray-900 font-sans text-[10px]">
              <span className="text-gray-800 font-bold text-[10px]">
                Registered Address:
              </span>{" "}
              18th Floor, One World Center, Tower 1, Jupiter Mills Compound,841
              Senapati Bapat Marg, Elphinstone Road Delisle Road, Mumbai
              Maharashtra 400013. Participation by the ABCD's clients in the
              insurance products is purely on a voluntary basis.
            </p>
            <p className="  text-gray-900 font-sans text-[10px]">
              The Trade Logo "Aditya Birla Capital" Displayed Above Is Owned By
              ADITYA BIRLA MANAGEMENT CORPORATION PRIVATE LIMITED (Trademark
              Owner) And Used By ADITYA BIRLA CAPITAL DIGITAL LIMITED (ABCDL)
              under the License. This policy is underwritten by Aditya Birla Sun
              Life Insurance Company Limited (ABSLI) .
            </p>
            <p className="  text-gray-900 font-sans text-[10px]">
              Terms and conditions of the website are applicable.
            </p>
            <p className="  text-gray-900 font-sans text-[10px]">
              The interest rate constitute the rack rate for all customers.
              Actual interest rate for any customer and will be as communicated
              at the time of loan sanction and disbursal. It will be subject to
              changes from time to time and is at sole discretion of ABHFL.
            </p>
            <p className="  text-gray-900 font-sans text-[10px]">
              Loans originated, booked and serviced by Aditya Birla Housing
              Finance Limited. subject to credit appraisal in sole discretion of
              Aditya Birla Housing Finance Limited and terms and conditions as
              agreed under individual loan agreement.
            </p>
          </div>

          <div className="housing-group space-y-2 mb-5 ">
            <h3 className="font-bold text-[#414042] text-xs">
              Aditya Birla Housing Finance Limited Regd. Office: Indian Rayon
              Compound, Veraval, Gujarat-362 266. Corporate Office: 9th Floor,
              Tower 1, One Indiabulls Centre, Jupiter Mill Compound, 841,
              Senapati Bapat Marg, Elphinstone Road, Mumbai 400 013 | (T) +91 22
              4193 3900 CIN: U65922GJ2009PLC083779.
            </h3>
            <p className="  text-gray-900 font-sans text-[10px]">
              For more information, please visit:
              homefinance.adityabirlacapital.com. *Terms & Conditions apply.
              Offer available only in selected cities. Loans originated, booked
              and serviced by Aditya Birla Housing Finance Limited. subject to
              credit appraisal in sole discretion of Aditya Birla Housing
              Finance Limited and terms and conditions as agreed under
              individual loan agreement. We may use the services of their
              authorized agencies in servicing the requirements.
            </p>
          </div>

          <div className="finance-group space-y-2">
            <h3 className="font-bold text-[#414042] text-xs">
              Aditya Birla Finance Limited Regd. Office: Indian Rayon Compound,
              Veraval - 362 266, Gujarat.
            </h3>
            <p className="  text-gray-900 font-sans text-[10px]">
              Corporate Office: 18th Floor, One World Centre, Jupiter Mill
              Compound, 841, Senapati Bapat Marg, Elphinstone Road, Mumbai 400
              013. (T) +91 22 4356 7100 | (F) +91 22 4356 7266 | CIN:
              U65990GJ1991PLC064603. For more information, please visit:
              finance.adityabirlacapital.com Subject to credit appraisal in sole
              discretion of Aditya Birla Finance Ltd. and terms and conditions
              as agreed under individual loan agreement. We may use the services
              of our authorised agencies in servicing your requirements.{" "}
            </p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="flex items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Your Mail"
            className="px-4 py-2 w-full md:w-64 rounded-l-md bg-[#ededf0] border border-[#bfbfc3] text-black focus:outline-none"
          />
          <button className="bg-[#29292c] hover:bg-[#3a3a3d] text-white px-4 py-2 rounded-r-md">
            Subscribe for Free
          </button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
