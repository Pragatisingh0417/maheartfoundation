import Image from "next/image";
import DonationBanner from "./components/DonationBanner";
import NewsletterBanner from "./components/NewsletterBanner";
import LatestNews from "./components/LatestNews";
import Whatwedo from "./components/Whatwedo";
import GetInvolved from "./components/GetInvolved";
import OutreachActivities from "./components/OutreachActivities";
import MercySection from "./components/MercySection";
import Partners from "./components/partners";

export default function Home() {
  return (
    <div className="">
     <DonationBanner />
    <MercySection />
     <LatestNews />
     <Whatwedo />
     <GetInvolved />
     <OutreachActivities />
     <Partners />
    </div>
  );
}
