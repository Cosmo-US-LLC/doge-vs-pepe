import React from "react"
import HeroSection from "./Herosection";
import WalletSec from "./WalletSec";
import FirstEverSec from "./FirstEverSec";
import TheRulesSec from "./TheRulesSec";
import PrizeMoneySec from "./PrizeMoneySec";
import CommunitySec from "./CommunitySec";
import MilestonesSec from "./MilestonesSec";
import RoadmapSec from "./RoadmapSec";
import MadebySec from "./MadebySec";
import Navbar from "../../component/navbar";
import FaqSec from "./FaqSec";
import Footer from "../../component/footer";
import TokenSec from "./TokenSec";
import BannerSec from "./BannerSec";
import VIPTicketSec from "./VIPTicketSec";
import HowItSec from "./HowItSec";
import HypeSec from "./HypeSec";
import PressandMediaSec from "./PressandMediaSec";
import BiggestSec from "./BiggestSec";
import DogeVSPepeSec from "./DogeVSPepeSec";
import TheFightSec from "./TheFightSec";
import DontWaitSec from "./DontWaitSec";


function Home() {
  return (
    <div className="bg-[black] w-[100%]">
    <div>
      <Navbar />
      <HeroSection />
      <BannerSec />
      <WalletSec />
      <VIPTicketSec />
      <FirstEverSec />
      <TheRulesSec />
      <MilestonesSec />
      <PrizeMoneySec />
      <HowItSec />
      <RoadmapSec />
      <CommunitySec /> 
      <TokenSec/>
      <HypeSec />
      <PressandMediaSec />
      <DogeVSPepeSec />
      <BiggestSec/>
      <TheFightSec />
      <DontWaitSec />
      {/* <MadebySec /> */}
      {/* <DontWaitSec /> */}
      <FaqSec />
      <Footer />
    </div>
    </div>
  );
}

export default Home;
