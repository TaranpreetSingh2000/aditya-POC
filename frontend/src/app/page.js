import Customcard from "@/components/custom-card";
import Herobanner from "@/components/hero-banner";
import Footertagline from "@/components/footer-tagline";
import Footer from "@/components/footer";
import SuccessStoryCard from "@/components/success-story-card";
import fetchData from "../api/graphql/fetchData";
import Heading from "@/components/heading/Heading";
import Teaser from "@/components/teaser";
import Card from "@/components/card";
import StyleHeading from "@/components/style-heading/StyleHeading";

export default async function Home() {
  const {cardData, headingData, styleData, teasersData } = await fetchData();
  const endPointUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <>
      <div className="main-container m-5">
        <div className="home-container flex flex-col gap-10 mb-10">
          <Heading heading={headingData} />
          <Teaser teasers={teasersData.teasers} endPointUrl={endPointUrl} />

        </div>
        <Customcard />
          <div className="grid my-8 grid-cols-5 w-full gap-6">
            <Card cards={cardData} endPointUrl={endPointUrl} />
          </div>
        <Herobanner />
        <SuccessStoryCard />
        <StyleHeading styledata={teasersData}/>
        {/* <NewsLetterForm news={newsLetterFormData}/> */}
      </div>
      <Footer />
      <Footertagline />
    </>
  );
}
