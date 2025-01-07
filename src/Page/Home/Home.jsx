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
import DontWaitSec from "./DontWaitSec";
import Navbar from "../../component/navbar";
import FaqSec from "./FaqSec";
import Footer from "../../component/footer";
import TokenSec from "./TokenSec";


function Home() {
  return (
    <div className="bg-[black] w-[100%]">
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <WalletSec />
      <FirstEverSec />
      <TheRulesSec />
      <PrizeMoneySec />
      <CommunitySec /> 
      <MilestonesSec />
      <RoadmapSec />
      <TokenSec/>
      <MadebySec />
      <DontWaitSec />
      <FaqSec />
      <Footer />
    </div>
    </div>
  );
}

export default Home;
