import { useState } from "react";
import bgImage from "../../assets/mobile_assets/mob_two_led_first.png";
import { Plus, Minus } from "lucide-react";

export default function MobileFightRules({ backgroundUrl }) {
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

  const [openIndex, setOpenIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full " aria-label="Fight rules">
      <div
        className="flex justify-center items-end pb-12 min-h-[500px]"
        style={{
          backgroundImage: `url(${backgroundUrl || bgImage})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "100% 100%",
        }}
      >
        <p className="text-center text-[32px] text-[#fff] font-[400] font-[Anton] leading-[125%] uppercase">
          GLORY OR DEFEAT. <br />
          Pick your Legend.
        </p>
      </div>
      <div className=" w-full  px-2 mt-[-20px]">
        <div className="w-[100%]">
          <div className="border-2 border-white/25 px-6 py-8  rounded-[24px] bg-black/90 flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <h2 className="text-[32px] text-[#fff] font-[400] font-[Anton] leading-[125%] uppercase">
              THE FIGHT RULES
            </h2>

            <div className="flex flex-col gap-4">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-white/20 last:border-b-0"
                >
              
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <p className="text-[24px] font-[400] leading-[133.333%] tracking-wide text-[#fff] uppercase font-anton">
                      {rule.title}
                    </p>
                    {openIndex === index ? (
                      <Minus className="text-white w-6 h-6" />
                    ) : (
                      <Plus className="text-white w-6 h-6" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {rule.desc && (
                      <p className="text-base leading-[150%] font-helvetica font-[700] text-[16px] text-neutral-300">
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
