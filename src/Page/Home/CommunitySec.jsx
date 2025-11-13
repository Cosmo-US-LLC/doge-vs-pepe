import dogeBox from "../../assets/RoadmapSec/v2_doge_msg_box.webp";
import pepeBox from "../../assets/RoadmapSec/v2_pepe_msg_box.webp";
import top_shadow from "../../assets/fightRule/top_shadow.webp";
import bottom_shadow from "../../assets/fightRule/bottom_shadow.webp";

function CommunitySec() {
  return (
    <div
      className="w-[100%] flex justify-center items-center min-h-[800px] Roadmap_bg overflow-hidden relative"
      id="roadmap"
    >
      <img
        src={top_shadow}
        alt="top_shadow"
        className="absolute top-0 left-0 right-0 w-full h-[130px]"
      />
      <img
        src={bottom_shadow}
        alt="bottom_shadow"
        className="absolute bottom-0 left-0 right-0 w-full h-[130px]"
      />
      <div className="max-w-[1280px] px-4 md:px-8 w-[100%] h-full mx-auto z-10 relative flex  justify-center">
        <div className="w-[32%] min-h-[220px] space-y-[10px]">
          <h3>
            Team DOGE <span className="text-[#E67500]">roadmap</span>
          </h3>
          <div className="border p-4 border-[#E67500] bg-[rgba(255, 255, 255, 0.10)]  backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#E67500] !font-[Anton] !font-[400] !tracking-[normal]">Preparation:</p>
            <p className="subtext tracking-[-0.64px]">
              Prove once again why Doge is the undefeated champion. Rally
              millions of loyal fans and build the strongest Doge Army in meme
              history.
            </p>
          </div>
          <div className="border p-4 border-[#E67500] bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#E67500] !font-[Anton] !font-[400] !tracking-[normal]">The Fight:</p>
            <p className="subtext tracking-[-0.64px]">
              Take on Pepe head-to-head. Show the world that an OG Meme
              Heavyweight never backs down and secure the crown.
            </p>
          </div>
          <div className="border p-4 border-[#E67500] bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#E67500] !font-[Anton] !font-[400] !tracking-[normal]">Victory Launch:</p>
            <p className="subtext tracking-[-0.64px]">
              Celebrate the triumph with a massive launch event and CEX
              listings, powered by global hype and top industry support.
            </p>
          </div>
          <div className="border p-4 border-[#E67500] bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#E67500] !font-[Anton] !font-[400] !tracking-[normal]">Domination:</p>
            <p className="subtext tracking-[-0.64px]">
              Lead the Doge movement to the next level. Become the fastest
              growing meme by market cap with thousands of Doge holders driving
              the legacy forward.
            </p>
          </div>
        </div>
        <div className="w-[36%] h-full relative">
          <div className="absolute left-[-40px] top-[15px] w-[260px] h-[136px]">
            <img src={dogeBox} alt="" className="w-full h-full relative z-10" />
            <p className="text-left subtext !text-[13px] !text-[#C90F0F] !font-[600] absolute left-[30px] top-[30px] w-[200px] z-20">
              Pepe, you’re just a hyped up fair-weather fighter, This will be my
              easiest payday. I’ll show you why I’m the undisputed champ!
            </p>
          </div>
          <div className="absolute right-[-70px] top-[15px] w-[260px] h-[136px]">
            <img src={pepeBox} alt="" className="w-full h-full relative z-10" />
            <p className="text-left subtext !text-[13px] !text-[#C90F0F] !font-[600] absolute right-[30px] top-[30px] w-[200px] z-20">
              Doge, your time is up. You’re just an old dog now. One punch, and
              I’ll have you chasing your tail! This will be your retirement
              party!
            </p>
          </div>
        </div>
        <div className="w-[32%] min-h-[220px] space-y-[10px]">
          <h3 className="text-right">
            Team PEPE <span className="text-[#00FF2F]">roadmap</span>
          </h3>
          <div className="border p-4 border-[#00FF2F] bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#00FF2F] !font-[Anton] !font-[400] !tracking-[normal]">Preparation:</p>
            <p className="subtext tracking-[-0.64px]">
              Rise as the fearless challenger. Unite Pepe fans across the globe
              and build unstoppable momentum toward the top.
            </p>
          </div>
          <div className="border p-4 border-[#00FF2F] bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#00FF2F] !font-[Anton] !font-[400] !tracking-[normal]">The Fight:</p>
            <p className="subtext tracking-[-0.64px]">
              Shock the meme world by knocking out Doge and becoming the new
              Meme Heavyweight Champion.
            </p>
          </div>
          <div className="border p-4 border-[#00FF2F] bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#00FF2F] !font-[Anton] !font-[400] !tracking-[normal]">Victory Launch:</p>
            <p className="subtext tracking-[-0.64px]">
              Ignite the scene with a legendary launch event and CEX listings,
              fueled by explosive community power and massive worldwide
              attention.
            </p>
          </div>
          <div className="border p-4 border-[#00FF2F] bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[10px] rounded-[18px]">
            <p className="subtext !text-[#00FF2F] !font-[Anton] !font-[400] !tracking-[normal]">Domination:</p>
            <p className="subtext tracking-[-0.64px]">
              Establish Pepe as the new meme king. Aim for the fastest growth in
              market cap with thousands of believers joining the Pepe movement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySec;
