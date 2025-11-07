import { useState } from "react";
import PropTypes from "prop-types";
import arw from "../../assets/footer/Group 1410124940.svg";
import top_shadow from "../../assets/fightRule/top_shadow.webp";
import bottom_shadow from "../../assets/fightRule/bottom_shadow.webp";
import greenC1 from "../../assets/faqs/v2_green_c1.webp";
import greenC2 from "../../assets/faqs/v2_green_c2.webp";

const faqData = [
  {
    question: "What is DogeVsPepe?",
    answer: `Doge vs Pepe is the ultimate showdown between two legendary memes battling for crypto supremacy.Only one will launch. Only one will be crowned number one. Supporters pick a side by buying tokens, the first team to raise $1 million wins. Your choice decides who takes the throne.`,
  },
  {
    question: "How does the presale work?",

    answer: `
      <ul className="pl-5 text-white list-disc sm:pl-8">
        <li>Pick your team: Doge ($DOGE) or Pepe ($PEPE).</li>
        <li>Buy tokens to support your chosen champion(s).</li>
        <li>Once the combined total hits $1 million, the team with the most funds raised is declared the winner.</li>
      </ul>
    `,
  },

  {
    question: "Can I invest in both teams?",
    answer:
      "Yes, you can support both teams by purchasing tokens for Doge and Pepe. However, only one will win, so choose your strategy wisely!",
  },

  {
    question: "How many times can I buy tokens?",
    answer:
      "You can purchase as many times as you like, but each wallet is capped at $25,000 to attract whales while maintaining fairness and equal participation.",
  },
  {
    question: "Is the presale fair and secure?",
    answer: `
   Yes, both presale contracts are fully public and transparent, allowing everyone to see where the funds are going.
      
    `,
  },
  {
    question: "How do I track the progress of the presale?",
    answer: `
      <ul style="list-style-type: disc; list-style-position: inside">
        <li>Everyone who purchases tokens will receive the winning coin, regardless of which team they supported.</li>
        <li>However, those who backed the winning team will receive extra rewards (see answer below).</li>
      </ul>
    `,
  },
  {
    question: "What are the rewards for picking the correct team?",
    answer: `
      <ul style="list-style-type: disc; list-style-position: inside">
        <li>
          <span className="font-semibold" style="font-size: 14px">Daily Bonus Coins:</span> 1M coins are added to the winner pool daily while the fight is ongoing and airdropped proportionally based on your holdings.
        </li>
        <li>
          <span className="font-semibold" style="font-size: 14px">Early Claim Access:</span> Winners can claim their airdropped coins 24 hours earlier than participants who supported the losing team.
        </li>
      </ul>
    `,
  },
  {
    question: "What happens if my team loses?",
    answer: `
      <ul className="pl-5 text-white list-disc sm:pl-8">
        <li>You will still receive the winning coin based on the amount of tokens you purchased.</li>
        <li>Your purchase will contribute to strengthening the liquidity pool of the winning token.</li>
      </ul>
    `,
  },

  {
    question: "How do I track the progress of the presale?",
    answer:
      "Real-time stats showing how much each team has raised will be displayed on the website, so you can stay updated and cheer your team to victory.",
  },
  {
    question: "When does the winning token launch?",
    answer:
      "The launch date will be announced as soon as $1M is raised. The winning token will launch within a few days of reaching the $1 million presale goal, with no long waits.",
  },
];

const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9s ease, opacity 2s ease",
  };

  return (
    <div>
      <div
        className={`bgBlur border flex-col rounded-[20px] sm:rounded-[40px] border-white/20 bg-[#FFFFFF1A] ${
          isOpen ? "#FFFFFF33" : "#FFFFFF33"
        }`}
      >
        <div
          className="flex justify-between items-center px-4 sm:px-8 py-4 gap-4 sm:gap-[25px] cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-center gap-5 xs:pt-[14px]">
            <div className="text-[18px] sm:text-[24px] leading-[28px] sm:leading-[64px] text-[#fff] font-[400] font-anton uppercase">
              {question}
            </div>
          </div>

          <div
            className={`aspect-square h-[30px] w-[30px] rounded-full flex items-center justify-center transition-transform duration-300 ${
              !isOpen ? "bg-gradient-to-tr" : "bg-gradient-to-br"
            } from-[#DD5B01] to-[#00FF2F]`}
          >
            <img
              src={arw}
              alt="arrow"
              className={`w-4 h-4 ${!isOpen ? "rotate-0" : "rotate-180"}`}
            />
          </div>
        </div>
        <div style={contentStyles}>
          <div className="w-[100%] px-4 sm:px-[34px] pb-[16px] sm:pb-[20px]">
            <p
              className="pb-[10px] answer !text-[14px] sm:text-[16px] text-[#A4A3A3] font-helvetica leading-[20px] sm:leading-[22px] font-[400]"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState(null);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden faqs_bg_mob" id="faq">
      <img
        src={greenC1}
        alt="greenC1"
        className="absolute top-[-20px] left-[80px] right-0 w-[40px] h-[40px] z-20"
      />
      <img
        src={greenC2}
        alt="greenC2"
        className="absolute top-[-80px] right-[-50px] w-[120px] h-[120px] z-20"
      />
      <img
        src={top_shadow}
        alt="top_shadow"
        className="absolute top-0 left-0 w-full h-[60px]"
      />
      <img
        src={bottom_shadow}
        alt="bottom_shadow"
        className="absolute bottom-0 left-0 w-full h-[100px]"
      />
      <div className="w-[100%] max-w-[880px] pt-10 px-4 mx-auto flex flex-col gap-4">
        <div className="text-center">
          <h2 className="pb-[10px]">
            Frequently <br /> Asked Questions
          </h2>
        </div>
        <div className="w-[100%] mx-auto">
          <div className="space-y-3 sm:space-y-[15px]">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems === index}
                handleClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// import React, { useState } from "react";

// import arw from "../../assets/footer/Group 1410124940.svg";
// import break_img from "../../assets/mobile_assets/breaking_img.png";

// import { faqData } from "../Utils/FAQs";

// const FaqItem = ({ question, answer, isOpen, handleClick }) => {
//   const createMarkup = () => ({ __html: answer });
//   const contentStyles = {
//     maxHeight: isOpen ? "1000px" : "0",
//     opacity: isOpen ? "1" : "0",
//     overflow: "hidden",
//     transition: "max-height 0.9s ease, opacity 2s ease",
//   };

//   return (
//     <div className="">
//       <div
//         className={`border faqsbrder flex-col rounded-[10px] border-solid bg-[#181818] ${
//           isOpen ? "border-[#fff]" : "border-[#fff]"
//         }`}
//       >
//         <div
//           className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer"
//           onClick={handleClick}
//         >
//           <div className="flex items-center gap-2">
//             <div
//               dangerouslySetInnerHTML={{ __html: question }}
//               className={`text-[16px] font-[Anton] text-[#fff] font-[400]`}
//             />
//           </div>

//           <div
//             className={`text-[14px] w-[20px] h-[20px] flex items-center justify-center ${
//               !isOpen ? "rotate-0" : "rotate-[-180deg]"
//             } transition-transform`}
//           >
//             <img src={arw} alt="" />
//           </div>
//         </div>
//         <div style={contentStyles}>
//           <div className="w-[100%] px-4 pb-3">
//             <p
//               className="text-[16px] font-[Helvetica] text-[#fff] leading-[150%] font-[400]"
//               dangerouslySetInnerHTML={createMarkup()}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FAQ = () => {
//   const [openItems, setOpenItems] = useState([]);

//   const handleClick = (index) => {
//     setOpenItems(openItems === index ? null : index);
//   };

//   return (
//     <div className="relative" id="faq">
//       <div className="w-[100%] pt-12 mx-auto pb-6 px-4">
//         <div className="mb-4 text-center">
//           <h2 className="text-[#fff] uppercase text-[32px] font-[Anton] font-[400] leading-[142.857%] pb-2">
//             Frequently <br /> Asked Questions
//           </h2>
//         </div>
//         <div className="w-full mx-auto">
//           <div className="space-y-3">
//             {faqData.map((faq, index) => (
//               <FaqItem
//                 key={index}
//                 question={faq.question}
//                 answer={faq.answer}
//                 isOpen={openItems === index}
//                 handleClick={() => handleClick(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
