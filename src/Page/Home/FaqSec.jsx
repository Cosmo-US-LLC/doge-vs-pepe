import { useState } from "react";
import arw from "../../assets/footer/Group 1410124940.svg";
import topShadow from "../../assets/DontWaitSec/rectangle_285.webp";
import bottomShadow from "../../assets/DontWaitSec/rectangle_297.webp";
import greenC1 from "../../assets/faqs/v2_green_c1.webp";
import greenC2 from "../../assets/faqs/v2_green_c2.webp";
import greenC3 from "../../assets/faqs/v2_green_c1.webp";
import greenC4 from "../../assets/faqs/v2_green_c2.webp";
import greenG1 from "../../assets/faqs/v2_green_g1.webp";
import greenG2 from "../../assets/faqs/v2_green_g2.webp";
import greenG3 from "../../assets/faqs/v2_green_g3.webp";
import greenG4 from "../../assets/faqs/v2_green_g4.webp";

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
        className={`border flex-col rounded-[40px] border-solid  bg-[#FFFFFF1A] backdrop-blur-(65px) ${
          isOpen ? "#FFFFFF33" : "#FFFFFF33"
        }`}
      >
        <div
          className="flex justify-between items-center px-8 pb-2 gap-[25px] cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-center gap-5 xs:pt-[14px]">
            <div className="text-[24px] leading-[64px] text-[#fff] font-[400] font-anton uppercase">
              {question}
            </div>
          </div>

          <div
            className={`gradient-bg h-[30px] w-[30px] rounded-full flex items-center justify-center transition-transform duration-300 ${
              !isOpen ? "rotate-0" : "rotate-180"
            }`}
          >
            <img src={arw} alt="arrow" className="w-4 h-4" />
          </div>
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
      <img
        src={topShadow}
        alt="topShadow"
        className="absolute top-0 left-0 right-0 w-full h-[130px]"
      />
      <img
        src={bottomShadow}
        alt="bottomShadow"
        className="absolute bottom-0 left-0 right-0 w-full h-[180px]"
      />
      <div className="absolute max-w-[1280px] mx-auto top-0 left-0 right-0 w-full h-full">
        <img
          src={greenC1}
          alt="greenC1"
          className="absolute top-[160px] left-0 right-0 w-[160px] h-[160px]"
        />
        <img
          src={greenC2}
          alt="greenC2"
          className="absolute top-[660px] left-[-110px] right-0 w-[160px] h-[160px]"
        />
        <img
          src={greenC3}
          alt="greenC3"
          className="absolute top-[630px] right-[40px] w-[70px] h-[70px]"
        />
        <img
          src={greenC4}
          alt="greenC4"
          className="absolute top-[-90px] right-[180px] w-[160px] h-[160px]"
        />
        <img
          src={greenG1}
          alt="greenG1"
          className="absolute top-[120px] right-[-40px] w-[160px] h-[160px]"
        />
        <img
          src={greenG2}
          alt="greenG2"
          className="absolute top-[400px] right-[-120px] w-[220px] h-[220px]"
        />
        <img
          src={greenG3}
          alt="greenG3"
          className="absolute bottom-[600px] right-[20px] w-[120px] h-[120px]"
        />
        <img
          src={greenG4}
          alt="greenG4"
          className="absolute bottom-[500px] left-[-40px] right-0 w-[200px] h-[200px]"
        />
      </div>
      <div className="w-[100%] max-w-[740px] pt-[73px] mx-auto pb-[63px] flex flex-col gap-4">
        <div className="text-center">
          <h2 className="pb-[10px]">
            Frequently <br /> Asked Questions
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
