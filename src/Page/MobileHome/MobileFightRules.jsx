import { useState } from "react";
import bgImage from "../../assets/mobile_assets/mob_two_led_first.png";
import { Plus, Minus, ChevronDown } from "lucide-react";
import arw from "../../assets/footer/Group 1410124940.svg";
import quote from "../../assets/fightRule/quote.png";

const FaqItem = ({ index, title, desc, isOpen, handleClick }) => {
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9s ease, opacity 2s ease",
  };

  return (
    <div>
      <div
        className={`bgBlur border flex-col rounded-[20px] sm:rounded-[40px] bg-black/20 border-white/20 ${
          isOpen ? "#FFFFFF33" : "#FFFFFF33"
        }`}
      >
        <div
          className="flex justify-between items-center px-4 sm:px-8 py-4 gap-4 sm:gap-[25px] cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-center gap-5 xs:pt-[14px]">
            <div className="text-[18px] sm:text-[24px] leading-[28px] sm:leading-[64px] text-[#fff] font-[400] font-anton uppercase">
              <span className="text-[#DD5B02]">{index + 1}. </span>
              {title}
            </div>
          </div>

          <div
            className={`aspect-square h-[30px] w-[30px] rounded-full flex items-center justify-center transition-transform duration-300 ${
              !isOpen ? "bg-gradient-to-tr" : "bg-gradient-to-br"
            } from-[#DD5B01] to-[#00FF2F]`}
          >
            <ChevronDown
              className={`w-4 h-4 ${!isOpen ? "rotate-0" : "rotate-180"}`}
            />
          </div>
        </div>
        <div style={contentStyles}>
          <div className="w-[100%] px-4 sm:px-[34px] pb-[16px] sm:pb-[20px]">
            <p className="pb-[10px] answer !text-[14px] sm:text-[16px] text-[#A4A3A3] font-helvetica leading-[20px] sm:leading-[22px] font-[400]" />
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileFightRules = () => {
  const rules = [
    {
      title: "CHOOSE YOUR CHAMPION",
      desc: "Pick your favorite meme by buying the coin you support.",
    },
    {
      title: "BUY TO SUPPORT YOUR TEAM",
      desc: "Every token you buy counts as a vote for your champion and team. ",
    },
    {
      title: "THE RACE TO $1 MILLION",
      desc: "The first team to reach $1 million ends the round. There will be 12 rounds in total, and the team that wins the most rounds will be the winner and launch.",
    },
    {
      title: "THE WINNER TAKES ALL",
      desc: "Only the winning coin will remain and officially launch. ",
    },
    {
      title: "PRIZE MONEY",
      desc: "Everyone will receive the winning coin but only those who backed it will get the exclusive prize money airdropped. ",
    },
    {
      title: "TRANSPARENCY & FAIR PLAY",
      desc: "Each wallet is capped at $25,000 to ensure fair participation for all. ",
    },
  ];

  const [openItems, setOpenItems] = useState(null);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <div className="relative fightRules_bg_mob" id="rules">
      <div className="w-[100%] max-w-[840px] pt-10 sm:pt-[73px] px-4 mx-auto pb-10 sm:pb-[63px] flex flex-col gap-4">
        <div className="text-center">
          <h2 className="pb-[10px]">THE FIGHT RULES</h2>
          <div className="h-[140px]" />
        </div>
        <div className="w-[100%] mx-auto">
          <div className="space-y-3 sm:space-y-[15px]">
            {rules.map((faq, index) => (
              <FaqItem
                key={index}
                index={index}
                title={faq.title}
                desc={faq.desc}
                isOpen={openItems === index}
                handleClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
        <img src={quote} alt="Quote" className="object-contain w-full h-auto" />
      </div>
    </div>
  );
};

export default MobileFightRules;

// export default function MobileFightRules({ backgroundUrl }) {
//   const rules = [
//     {
//       title: "1. CHOOSE YOUR CHAMPION",
//       desc: "Pick your favorite meme by buying the coin you support.",
//     },
//     {
//       title: "2. BUY TO SUPPORT YOUR TEAM",
//       desc: "Every token you buy counts as a vote for your champion and team. ",
//     },
//     {
//       title: "3. THE RACE TO $1 MILLION",
//       desc: "The first team to reach $1 million ends the round. There will be 12 rounds in total, and the team that wins the most rounds will be the winner and launch.",
//     },
//     {
//       title: "4. THE WINNER TAKES ALL",
//       desc: "Only the winning coin will remain and officially launch. ",
//     },
//     {
//       title: "5. PRIZE MONEY",
//       desc: "Everyone will receive the winning coin but only those who backed it will get the exclusive prize money airdropped. ",
//     },
//     {
//       title: "6. TRANSPARENCY & FAIR PLAY",
//       desc: "Each wallet is capped at $25,000 to ensure fair participation for all. ",
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(0);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="relative w-full pb-[20px]" aria-label="Fight rules" id="rules"
//      style={{
//           backgroundImage: `url(${backgroundUrl || bgImage})`,
//           backgroundSize: "100% 100%",
//           backgroundPosition: "100% 100%",
//         }}
//     >
//       <div
//         className="flex justify-center items-end pb-12 min-h-[500px]"

//       >
//         <p className="text-center text-[32px] text-[#fff] font-[400] font-[Anton] leading-[125%] uppercase">
//           GLORY OR DEFEAT. <br />
//           Pick your Legend.
//         </p>
//       </div>
//       <div className=" w-full  px-2 mt-[-20px]">
//         <div className="w-[100%]">
//           <div className="border-2 border-white/25 px-6 py-8  rounded-[24px] bg-black/90 flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
//             <h2 className="text-[32px] text-[#fff] font-[400] font-[Anton] leading-[125%] uppercase">
//               THE FIGHT RULES
//             </h2>

//             <div className="flex flex-col gap-4">
//               {rules.map((rule, index) => (
//                 <div
//                   key={index}
//                   className="py-4 border-b border-white/20 last:border-b-0"
//                 >

//                   <button
//                     onClick={() => toggleAccordion(index)}
//                     className="w-full flex items-center justify-between text-left"
//                   >
//                     <p className="text-[24px] font-[400] leading-[133.333%] tracking-wide text-[#fff] uppercase font-anton">
//                       {rule.title}
//                     </p>
//                     {openIndex === index ? (
//                       <Minus className="text-white w-6 h-6" />
//                     ) : (
//                       <Plus className="text-white w-6 h-6" />
//                     )}
//                   </button>

//                   <div
//                     className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                       openIndex === index
//                         ? "max-h-40 opacity-100 mt-2"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     {rule.desc && (
//                       <p className="text-base leading-[150%] font-helvetica font-[700] text-[16px] text-neutral-300">
//                         {rule.desc}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
