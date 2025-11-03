import React from "react";
import Navbar from "../../component/mobile/navbar";
import MobileHeroSection from "./MobileHeroSection";
import HeroWalletSec from "./HeroWalletSec";
import MobileFirstEverSec from "./MobileFirstEverSec";
import TheRules from "./TheRules";
import PrizeMoney from "./PrizeMoney";
import Community from "./Community";
import Milestones from "./Milestones";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import TheFightSecMob from "./TheFightSecMob";
import DoNotWait from "./DoNotWait";
import FAQ from "./FAQ";
import Footer from "./Footer";
import MobileTicket from "./MobileTicket";
import BiggestMobSec from "./BiggestMobSec";
import DogeVSPepeMobSec from "./DogeVSPepeMobSec";
import PressandMediamobSec from "./PressandMediamobSec";
import HypeMobSec from "./HypeMobSec";
import HowItmobSec from "./HowItmobSec";
import MadeBy from "./MadeBy";
import MobileTwoLegends from "./MobileTwoLegends";
import MobileFightRules from "./MobileFightRules";
import MobileHowTowBuy from "./MobileHowTowBuy";
import RoadmapMob from "./Roadmap";
import DogeVsPepeNews from "../Home/DogeVsPepeNews";
import CountdownMob from "./CountdownMob";
import BannerSecMob from "./BannerSecMob";

function MobileHome() {
  return (
    <div className="bg-[black] w-[100%]">
      <div>
        <Navbar />
        <MobileHeroSection />
        <BannerSecMob />
        <MobileTwoLegends />
        <MobileFightRules />
        <CountdownMob />
        <HeroWalletSec />
        <MobileHowTowBuy />
        <PrizeMoney />
        <RoadmapMob />
        <HowItmobSec />
        <Tokenomics />
        <DogeVSPepeMobSec />
        <TheFightSecMob />
        <DoNotWait />
        <FAQ />
        <DogeVsPepeNews />
        <Footer />
      </div>
    </div>
  );
}

export default MobileHome;
