import React, { useState } from "react";
import arw from "../../assets/footer/Group 1410124940.svg";

const faqData = [
  {
    question: "What is DogevsPepe?",
    answer: `DogevsPepe is a crypto presale with a twist. It’s a competition between two iconic memes, Doge and Pepe, to determine which one escapes the matrix and launches as a live cryptocurrency. Investors choose their side by purchasing tokens for either team (or both!), and the team with the most funds raised wins.`,
  },
  {
    question: "How does the presale work?",
    answer: `
      <ul className="list-disc pl-8 text-white">
        <li>Choose your champion: Team Doge (Orange Coin) or Team Pepe (Green Coin).</li>
        <li>Buy tokens to support your chosen team(s).</li>
        <li>When the combined presale total hits $1 million, the team with the most funds raised is declared the winner.</li>
      </ul>
    `,
  },
  {
    question: "What happens to the losing team’s funds?",
    answer:
      "The losing team’s funds are added to the liquidity pool of the winning token, boosting its value and ensuring a strong market launch. This means even if your team doesn’t win, your investment contributes to the success of the overall project.",
  },
  {
    question: "How Many Times Can I Buy?",
    answer:
      "You can buy as many times as you like, however each singular purchase is capped at a maximum of $10,000 to ensure fair participation and prevent any one person from dominating the presale.",
  },
  {
    question: "Can I invest in both teams?",
    answer:
      "Yes! You can support both Doge and Pepe by purchasing tokens for both teams. However, only one will win, so choose wisely!",
  },

  {
    question: "Is the presale fair and secure?",
    answer:
      "Absolutely. Both presale contracts are public and fully transparent, so you can see how funds are being allocated.",
  },
  {
    question: "When does the winning token launch?",
    answer: `
    The winning token launches within 24 hours of the presale goal being reached. This means no long waits—your investment goes to work almost immediately.
      
    `,
  },
  {
    question: "How do I track the progress of the presale?",
    answer:
      "Live stats will be displayed on the website, showing how much each team has raised. Stay connected to see if your team is leading the charge!",
  },
  {
    question: " How do I join the community?",
    answer: `
<div className="w-[900px]">
  <ul className="list-decimal pl-5 text-white">
    <li>
      We have Telegram channels to keep you updated and engaged:
      <ul className="list-disc pl-8 text-white">
        <li>General Channel: For overall updates and discussions.</li>
        <li>Team Pepe Channel: For Green Coin supporters</li>
         <li>Team Doge Channel: For Orange Coin fans.</li>
          <li>After the presale ends, all channels merge into one unified community supporting the winning project.</li>
      </ul>
    </li>
   
  </ul>
</div>

    `,
  },
 
  {
    question: "What happens if my team loses?",
    answer:
      "Even if your team doesn’t win, the funds raised by the losing team are added to the liquidity pool of the winning token. This helps boost its value and ensures a strong start for the winner.",
  },
  {
    question: "Why should I join DogevsPepe?",
    answer:
      "DogevsPepe isn’t just a presale—it’s a movement. You’re not only investing in a meme token but also participating in an exciting, competitive, and transparent process that redefines crypto presales. Plus, you’ll be part of a passionate community working to take the winning token to the moon.",
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
            <div className="text-[22px] text-[#fff] font-[600] font-k2d">
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
              className="pb-[10px] answer text-[22px] text-white leading-[150%] font-[600] font-k2d"
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
    <div className="relative font-k2d" id="faq">
      <div className="w-[100%] max-w-[1143px] pt-[73px] mx-auto pb-[63px] flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-[#fff] font-HiJack uppercase text-[42px] font-[400] leading-[142.857%] pb-[10px] font-k2d">
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
