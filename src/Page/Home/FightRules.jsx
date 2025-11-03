import { useState } from "react";
import bgImage from "../../assets/fightRule/v2_the_fight_rule_bg.webp";
import top_shadow from "../../assets/fightRule/top_shadow.webp";
import bottom_shadow from "../../assets/fightRule/bottom_shadow.webp";
import fight_rules_msg from "../../assets/fightRule/v2_the_fight_rule_msg.webp";
import { Plus, Minus } from "lucide-react";

export default function FightRules({ backgroundUrl }) {
  const rules = [
    {
      title: (
        <p>
          <span className="text-[#DD5B01]">1. </span> CHOOSE YOUR CHAMPION
        </p>
      ),
      desc: "Pick your favorite meme by buying the coin you support.",
    },
    {
      title: (
        <p>
          <span className="text-[#DD5B01]">2. </span> BUY TO SUPPORT YOUR TEAM
        </p>
      ),
      desc: "Every token you buy counts as a vote for your champion and team. ",
    },
    {
      title: (
        <p>
          <span className="text-[#DD5B01]">3. </span> THE RACE TO $1 MILLION
        </p>
      ),
      desc: "The first team to reach $1 million ends the round. There will be 12 rounds in total, and the team that wins the most rounds will be the winner and launch.",
    },
    {
      title: (
        <p>
          <span className="text-[#DD5B01]">4. </span> THE WINNER TAKES ALL
        </p>
      ),
      desc: "Only the winning coin will remain and officially launch. ",
    },
    {
      title: (
        <p>
          <span className="text-[#DD5B01]">5. </span> PRIZE MONEY
        </p>
      ),
      desc: "Everyone will receive the winning coin but only those who backed it will get the exclusive prize money airdropped. ",
    },
    {
      title: (
        <p>
          <span className="text-[#DD5B01]">6. </span> TRANSPARENCY & FAIR PLAY
        </p>
      ),
      desc: "Each wallet is capped at $25,000 to ensure fair participation for all. ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // First open by default

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="relative w-full mx-auto flex flex-col justify-center items-center"
      aria-label="fight_rules"
      id="fight_rules"
      style={{
        backgroundImage: `url(${backgroundUrl || bgImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "100% 100%",
        minHeight: "900px",
      }}
    >
      <div className="absolute z-20 top-0 left-0 right-0 w-full   ">
        <img className="w-full h-[100px]" src={top_shadow} alt="" />
      </div>
      <div className="absolute z-20 bottom-0 left-0 right-0  w-full">
        <img className="w-full h-[60px]" src={bottom_shadow} alt="" />
      </div>
      <div className="flex w-full gap-10 max-w-[1280px] px-8 mx-auto flex-row">
        <div className="h-[800px] flex justify-start items-end w-[54%]">
          <div className=" flex flex-col gap-4 ">
            <h2 className="text-center">THE FIGHT RULES</h2>

            <div className="flex flex-col gap-4">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="py-4 px-8 border border-white/20 last:border-b-0 rounded-[30px]"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between space-x-2 items-center cursor-pointer">
                    <p className="text-[32px] font-[400] leading-[40px] tracking-wide text-[#fff] uppercase font-anton">
                      {rule.title}
                    </p>
                    {activeIndex === index ? (
                      <div className="w-8 h-8 accordion-gradient-bg-arrow rounded-full flex justify-center items-center">
                        <Minus className="text-white w-6 h-6" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 accordion-gradient-bg-arrow rounded-full flex justify-center items-center">
                        <Plus className="text-white w-6 h-6" />
                      </div>
                    )}
                  </div>
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
        <div className="w-[46%] flex justify-center items-end pb-10 fight_rules relative">
          <img
            src={fight_rules_msg}
            alt=""
            className="w-[320px] h-auto absolute top-[-20px] left-[120px]"
          />
        </div>
      </div>
    </section>
  );
}
