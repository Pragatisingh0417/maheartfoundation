import Image from "next/image";
import DonationBanner from "./components/DonationBanner";
import WordFromMercy from "./components/WordFromMercy";
import OurInspiration from "./components/OurInspiration";
import NewsletterBanner from "./components/NewsletterBanner";
import LatestNews from "./components/LatestNews";
import UrbanCentersSection from "./components/UrbanCentersSection";

export default function Home() {
  return (
    <div className="">
     <DonationBanner />
     <WordFromMercy />
     <OurInspiration />
     <NewsletterBanner />
     <LatestNews />
     <UrbanCentersSection />
    </div>
  );
}
