import { useState } from "react";
import bgImage from "../../assets/fightRule/Fight-rules.webp";

export default function FightRules({ backgroundUrl }) {
  const rules = [
    {
      title: "1. CHOOSE YOUR CHAMPION",
      desc: "Pick your favorite meme by buying the coin you support.",
    },
    {
      title: "2. BUY TO SUPPORT YOUR TEAM",
      desc: "Every token you buy counts as a vote for your champion and team. ",
    },
    {
      title: "3. THE RACE TO $1 MILLION",
      desc: "The presale round ends when the first team hits $1 million. ",
    },
    {
      title: "4. THE WINNER TAKES ALL",
      desc: "Only the winning coin will remain and officially launch. ",
    },
    {
      title: "5. PRIZE MONEY",
      desc: "Everyone will receive the winning coin but only those who backed it will get the exclusive prize money airdropped. ",
    },
    {
      title: "6. TRANSPARENCY & FAIR PLAY",
      desc: "Each wallet is capped at $25,000 to ensure fair participation for all. ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // First open by default

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="relative w-full max-w-[1440px]  mx-auto flex flex-col justify-center items-center"
      aria-label="Fight rules"
      style={{
        backgroundImage: `url(${backgroundUrl || bgImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "100% 100%",
        minHeight: "900px",
      }}
    >
      <div className="flex w-full gap-10 max-w-[1280px]  mx-auto px-8 flex-row">
        <div className="w-[50%] flex justify-center items-end pb-10">
          <p className="text-center section_heading">
            GLORY OR DEFEAT. <br />
            Pick your Legend.
          </p>
        </div>

        <div className="h-[800px] flex justify-center items-end w-[50%]">
          <div
            className="border-2 border-white/25 px-8 py-8 m-4 rounded-lg bg-black/90 flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
           
          >
            <h2 className="text-center section_heading">THE FIGHT RULES</h2>

            <div className="flex flex-col gap-4">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-white/20 last:border-b-0"
                   onClick={() => toggleAccordion(index)}
                >
                  <p className="text-[32px] font-[400] leading-[40px] tracking-wide text-[#fff] uppercase font-anton">
                    {rule.title}
                  </p>
                  <div
                    className={`overflow-hidden max-w-[360px] transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {rule.desc && (
                      <p className="text-base leading-relaxed font-helvetica font-[700] text-[22px] text-neutral-300">
                        {rule.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
