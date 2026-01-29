import Image from "next/image";
import DonationBanner from "./components/DonationBanner";
import WordFromMercy from "./components/WordFromMercy";
import OurInspiration from "./components/OurInspiration";
import NewsletterBanner from "./components/NewsletterBanner";
import LatestNews from "./components/LatestNews";
import UrbanCentersSection from "./components/UrbanCentersSection";
import FundraiseCard from "./components/FundraiseCard"
import Whatwedo from "./components/Whatwedo";
import GetInvolved from "./components/GetInvolved";
import OutreachActivities from "./components/OutreachActivities";
import MercySection from "./components/MercySection";

export default function Home() {
  return (
    <div className="">
     <DonationBanner />
    <MercySection />
     <NewsletterBanner />
     <LatestNews />
     {/* <UrbanCentersSection /> */}
     
     <Whatwedo />
     <GetInvolved />
     <OutreachActivities />
     {/* <GetInTouchSection /> */}
    </div>
  );
}
