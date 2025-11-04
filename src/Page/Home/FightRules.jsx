import bgImage from "../../assets/fightRule/v2_the_fight_rule_bg.webp";
import top_shadow from "../../assets/fightRule/top_shadow.webp";
import bottom_shadow from "../../assets/fightRule/bottom_shadow.webp";
import fight_rules_msg from "../../assets/fightRule/v2_the_fight_rule_msg.webp";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

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
      <img
        src={bottom_shadow}
        alt="top_shadow"
        className="absolute bottom-0 left-0 right-0 w-full h-[80px]"
      />
      <div className="absolute z-20 top-0 left-0 right-0 w-full   ">
        <img className="w-full h-[100px]" src={top_shadow} alt="" />
      </div>
      {/* <div className="absolute z-20 bottom-0 left-0 right-0  w-full">
        <img className="w-full h-[60px]" src={bottom_shadow} alt="" />
      </div> */}
      <div className="flex w-full gap-10 max-w-[1280px] px-8 mx-auto flex-row">
        <div className="h-[800px] flex justify-start items-end w-[54%]">
          <div className=" flex flex-col gap-4 ">
            <h2 className="text-center">THE FIGHT RULES</h2>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="flex flex-col gap-4"
            >
              {rules.map((rule, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="py-4 px-8 border bg-[#04040433] border-white/20 last:border-b-0 rounded-[30px]"
                >
                  <AccordionTrigger className="hover:no-underline [&>svg]:hidden group ">
                    <div className="flex justify-between space-x-2 items-center w-full">
                      <p className="text-[32px] font-[400] leading-[40px] tracking-wide text-[#fff] uppercase font-anton">
                        {rule.title}
                      </p>
                      <div className="w-8 h-8 accordion-gradient-bg-arrow rounded-full flex justify-center items-center group-data-[state=open]:hidden">
                        <ChevronDown className="text-white w-6 h-6" />
                      </div>
                      <div className="w-8 h-8 accordion-gradient-bg-arrow rounded-full flex justify-center items-center hidden group-data-[state=open]:flex">
                        <ChevronUp className="text-white w-6 h-6" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[360px] mt-2 !pt-0">
                    {rule.desc && (
                      <p className="text-base leading-relaxed font-helvetica font-[700] text-[22px] text-neutral-300">
                        {rule.desc}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="w-[46%] flex justify-center items-end fight_rules relative">
          <img
            src={fight_rules_msg}
            alt=""
            className="w-[320px] h-auto absolute top-[-20px] left-[100px]"
          />
          <img
            src={top_shadow}
            alt=""
            className="absolute bottom-[-100px] left-0 right-0 w-full h-[100px]"
          />
          <img
            src={bottom_shadow}
            alt=""
            className="absolute bottom-0 left-0 right-0 w-full h-[100px]"
          />
        </div>
      </div>
    </section>
  );
}
