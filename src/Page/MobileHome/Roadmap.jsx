import cardimg2 from "../../assets/mobile_assets/pepe_rd_mob.png";
import cardimg1 from "../../assets/mobile_assets/doge_mob.png";
import vectcard2 from "../../assets/CommunitySec/Ellipse 80.webp";
import vectcard1 from "../../assets/CommunitySec/Ellipse 81.webp";
import topShadow from "../../assets/CommunitySec/rectangle_290.webp";
import bottomShadow from "../../assets/CommunitySec/rectangle_294.webp";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import pepeRoad from "../../assets/RoadmapSec/pepe-mob-bg.png";

function RoadmapMob() {
  const dogeRoadmapPhases = [
    {
      title: "Preparation:",
      description:
        "Prove once again why Doge is the undefeated champion. Rally millions of loyal fans and build the strongest Doge Army in meme history.",
    },
    {
      title: "The Fight:",
      description:
        "Take on Pepe head-to-head. Show the world that an OG Meme Heavyweight never backs down and secure the crown.",
    },
    {
      title: "Victory Launch:",
      description:
        "Celebrate the triumph with a massive launch event and CEX listings, powered by global hype and top industry support.",
    },
    {
      title: "Domination:",
      description:
        "Lead the Doge movement to the next level. Become the fastest growing meme by market cap with millions of Doge holders driving the legacy forward.",
    },
  ];

  const pepeRoadmapPhases = [
    {
      title: "Preparation:",
      description:
        "Rise as the fearless challenger. Unite Pepe fans across the globe and build unstoppable momentum toward the top. ",
    },
    {
      title: "The Fight:",
      description:
        "Shock the meme world by knocking out Doge and becoming the new Meme Heavyweight Champion.",
    },
    {
      title: "Victory Launch:",
      description:
        "Ignite the scene with a legendary launch event and CEX listings, fueled by explosive community power and massive worldwide attention.",
    },
    {
      title: "Domination:",
      description:
        "Establish Pepe as the new meme king. Aim for the fastest growth in market cap with millions of believers joining the Pepe movement.",
    },
  ];

  return (
    <div
      className="w-[100%] flex justify-center items-center  h-full bg-black overflow-hidden relative"
      id="roadmap"
    >
      <div className="space-y-[40px]">
        <div>
          <div className="p-3 text-center Roadmap_Mob_bg">
            <h3>TEAM DOGE</h3>
            <h3 className="text-[#E67500] text-center mb-8  ">ROADMAP</h3>
            <div className="h-[578px]" />
            <div className="space-y-6">
              {dogeRoadmapPhases.map((phase, index) => (
                <div
                  key={index}
                  className={
                    "border border-[#E67500] rounded-[30px] bg-white/10 py-4 px-[30px]"
                  }
                >
                  <div className="text-left">
                    <h4 className="text-[#E67500]">{phase.title}</h4>
                    <p className="pt-2.5 text-[16px] text-[#fff] font-[400] font-helvetica leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Div - Team Pepe Roadmap */}
          <div className="p-3 mt-2 text-center Roadmap_Mob_bg2">
            <h3>TEAM PEPE</h3>
            <h3 className="text-[#4FFF2D] text-center mb-8  ">ROADMAP</h3>
            <div className="h-[667px]" />
            <div className="space-y-6">
              {pepeRoadmapPhases.map((phase, index) => (
                <div
                  key={index}
                  className={
                    "border border-[#4FFF2D] rounded-[30px] bg-white/10 py-4 px-[30px]"
                  }
                >
                  <div className="text-left">
                    <h4 className="text-[#4FFF2D]">{phase.title}</h4>
                    <p className="pt-2.5 text-[16px] text-[#fff] font-[400] font-helvetica leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapMob;
