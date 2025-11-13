import React from "react";
import HeroSection from "./Herosection";
import WalletSec from "./WalletSec";
import FirstEverSec from "./FirstEverSec";
import TheRulesSec from "./TheRulesSec";
import PrizeMoneySec from "./PrizeMoneySec";
import CommunitySec from "./CommunitySec";
import MilestonesSec from "./MilestonesSec";
import RoadmapSec from "./RoadmapSec";
import Navbar from "../../component/navbar";
import FaqSec from "./FaqSec";
import Footer from "../../component/footer";
import BannerSec from "./BannerSec";
import VIPTicketSec from "./VIPTicketSec";
import HowItSec from "./HowItSec";
import HypeSec from "./HypeSec";
import PressandMediaSec from "./PressandMediaSec";
import BiggestSec from "./BiggestSec";
import DogeVSPepeSec from "./DogeVSPepeSec";
import TheFightSec from "./TheFightSec";
import DontWaitSec from "./DontWaitSec";
import TokenmobSec from "../MobileHome/Tokenomics";
// import TokenmobSec from "../MobileHome/Tokenomics";
import TokenSec from "./TokenSec";
import TwoLegends from "./TwoLegends";
import FightRules from "./FightRules";
import HowToBuy from "./HowToBuy";
import DogeVsPepeNews from "./DogeVsPepeNews";
import Preloader from "./Preloader";

function Home() {
  return (
    <div className="bg-[black] w-[100%]">
      <div className="overflow-x-hidden">
        {/* <Preloader /> */}
        <Navbar />
        <HeroSection />
        <BannerSec />
        <TwoLegends />
        <FightRules />
        <WalletSec />
        <HowToBuy />
        <PrizeMoneySec />
        <CommunitySec />
        <HowItSec />
        <TokenSec />
        <DogeVSPepeSec />
        <TheFightSec />
        <DontWaitSec />
        <FaqSec />
        <DogeVsPepeNews />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
