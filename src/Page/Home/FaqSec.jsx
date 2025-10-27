import React, { useState } from "react";
import arw from "../../assets/footer/Group 1410124940.svg";

const faqData = [
  {
    question: "What is DogeVsPepe?",
    answer: `Doge vs Pepe is the ultimate showdown between two legendary memes battling for crypto supremacy.Only one will launch. Only one will be crowned number one. Supporters pick a side by buying tokens, the first team to raise $1 million wins. Your choice decides who takes the throne.`,
  },
  {
    question: "How does the presale work?",

    answer: `
      <ul className="pl-8 text-white list-disc">
        <li> Pick your team: Doge ($DOGE) or Pepe ($PEPE).</li>
        <li> Buy tokens to support your chosen champion(s).</li>
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
    answer: `<div className="w-[900px]">
  <ul className="pl-5 text-white list-decimal">
    <li>
   
      <ul className="pl-8 text-white list-disc">
       
        <li>Everyone who purchases tokens will receive the winning coin, regardless of which team they supported.</li>
         <li>However, those who backed the winning team will receive extra rewards (see answer below).</li>
          
      </ul>
    </li>
 

  </ul>
</div>`,
  },
  {
    question: "What are the rewards for picking the correct team?",
    answer: `
<div className="w-[900px]">
  <ul className="pl-5 text-white list-decimal">
    <li>
   
      <ul className="pl-8 text-white list-disc">
        <li>1. Daily Bonus Coins:</li>
        <li>1M coins are added to the winner pool daily while the fight is ongoing.</li>
         <li>These coins are airdropped proportionally based on the number of tokens you hold.</li>
          
      </ul>

      <ul className="pl-8 text-white list-disc">
        <li>2.Early Claim Access:</li>
        <li>Winners can claim their airdropped coins 24 hours earlier than participants who supported the losing team.</li>
          
          
      </ul>
    </li>
   
  </ul>
</div>

 

    `,
  },
  {
    question: "What happens if my team loses?",
    answer: `
<div className="w-[900px]">
  <ul className="pl-5 text-white list-decimal">
    <li>
   
      <ul className="pl-8 text-white list-disc">
        <li>Even if your team loses:</li>
        <li>You will still receive the winning coin based on the amount of tokens you purchased.</li>
         <li>Your purchase will contribute to strengthening the liquidity pool of the winning token.</li>
          
      </ul>
    </li>
   
  </ul>
</div>

 



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
        className={`border faqsbrder flex-col rounded-[15px] border-solid bg-[#181818] ${
          isOpen ? "border-[#fff]" : "border-[#fff]"
        }`}
      >
        <div
          className="flex justify-between items-center px-[34px] py-[30px] gap-[25px] cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-center gap-5 xs:pt-[14px]">
            <div className="text-[24px] leading-[64px] text-[#fff] font-[400] font-anton uppercase">
              {question}
            </div>
          </div>

          <h4
            className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px] flex items-center justify-center plusIcon ${
              !isOpen ? "rotate-0" : "rotate-[-180deg]"
            }`}
          >
            <img src={arw} alt="" />
          </h4>
        </div>
        <div style={contentStyles}>
          <div className="w-[100%] px-[34px] pb-[20px]">
            <p
              className="pb-[10px] answer text-[16px] text-[#fff] font-helvetica leading-[22px] font-[400]"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSec = () => {
  const [openItems, setOpenItems] = useState(null);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <div className="relative faqs_bg" id="faq">
      <div className="w-[100%] max-w-[1040px] pt-[73px] mx-auto pb-[63px] flex flex-col gap-4">
        <div className="text-center">
          <h2 className="section_heading pb-[10px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mx-auto">
          <div className="space-y-[15px]">
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

export default FaqSec;
