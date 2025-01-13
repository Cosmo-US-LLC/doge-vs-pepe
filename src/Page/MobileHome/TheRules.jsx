import React from "react";
import rule_1 from "../../assets/Mobile/rule_1.webp";
import rule_2 from "../../assets/Mobile/rule_2.webp";
import rule_3 from "../../assets/Mobile/rule_3.webp";
import rule_4 from "../../assets/Mobile/rule_4.webp";
import rule_5 from "../../assets/Mobile/rule_5.webp";
import rule_6 from "../../assets/Mobile/rule_6.webp";
import rule_7 from "../../assets/Mobile/rule_7.webp";
import rule1 from "../../assets/Mobile/rule-1.png";
import rule2 from "../../assets/Mobile/rule-2.png";
import rule3 from "../../assets/Mobile/rule-3.png";
import rule4 from "../../assets/Mobile/rule-4.png";
import rule5 from "../../assets/Mobile/rule-5.png";
import rule6 from "../../assets/Mobile/rule-6.png";
import rule7 from "../../assets/Mobile/rule-7.png";
import side_dog from "../../assets/Mobile/doge-mobile.png";
import side_frog from "../../assets/Mobile/pepe-mobile.png";
import telegram_icon from "../../assets/Mobile/telegram_icon.svg";

const Rule1 = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-4">
      <p className="text-[26px] font-[700] leading-[31px] text-[white] mt-4 mb-4">
        The Rules
      </p>
      <div
        className="relative flex flex-col items-center w-full p-[2px] rounded-[10px]"
        style={{
          background:
            "linear-gradient(136.94deg, rgba(0, 77, 244, 0) 15.37%, rgba(239, 171, 0, 0.49) 35.41%, #4EB52A 47.25%, rgba(239, 171, 0, 0.53) 57.66%, rgba(38, 221, 255, 0) 97.37%)",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4">
          <img src={rule_1} className="h-[135px] w-[144px] mt-2" alt="rule_1" />
          <div className="flex flex-col items-start justify-center w-[300px] mt-4">
            <p className="text-[18px] font-[700] leading-[20px] text-[white]">
              1. Choose Your Champion
            </p>
            <ol className="flex flex-col gap-4 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[#FFF]">
                <span className="text-[16px] text-[#FFF] font-[700]">
                  Team Pepe ($PEGE) –
                </span>{" "}
                <br />{" "}
                <p className="text-[16px] text-[#FFF] font-[400]">
                  Join Pepe, the internet’s ultimate rebel. This if for the
                  people who value humor, resilience, and chaos.
                </p>
              </li>
              <li className="text-[#FFF]">
                <span className="text-[16px] text-[#FFF] font-[700]">
                  Team Doge ($DOPE) –
                </span>{" "}
                <br />{" "}
                <p className="text-[16px] text-[#FFF] font-[400]">
                  Stand with Doge, the first Meme who started it all. This is
                  for the people who understand and respect the Doge legacy.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rule2 = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-2">
      <div
        className="relative flex flex-col items-center w-full p-[2px] rounded-[10px]"
        style={{
          background:
            "linear-gradient(136.94deg, rgba(0, 77, 244, 0) 15.37%, rgba(239, 171, 0, 0.49) 35.41%, #4EB52A 47.25%, rgba(239, 171, 0, 0.53) 57.66%, rgba(38, 221, 255, 0) 97.37%)",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4">
          <img src={rule_2} className="h-[135px] w-[144px] mt-2" alt="rule_2" />
          <div className="flex flex-col items-start justify-center w-[300px] mt-4">
            <p className="text-[18px] font-[700] leading-[20px] text-[white]">
              2. Buy To Support Your Team
            </p>
            <ol className="w-[294px] flex flex-col gap-1 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[16px] text-[#FFF] font-[500]">
                Buy tokens and support your favorite meme.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                Every token purchased is a vote toward their victory.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                Maximum Buy-In: Each wallet can buy for up to $10,000.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rule3 = () => {
  return (
    <div className="relative flex flex-col items-center px-4 mt-2">
      <img
        src={side_dog}
        className="absolute h-[306px] w-[100px] left-[0px] top-[-62px] z-30"
        alt="side_dog"
      />

      <div
        className="relative flex flex-col items-center w-full p-[2px] rounded-[10px] mt-4"
        style={{
          background:
            "linear-gradient(136.94deg, rgba(0, 77, 244, 0) 15.37%, rgba(239, 171, 0, 0.49) 35.41%, #4EB52A 47.25%, rgba(239, 171, 0, 0.53) 57.66%, rgba(38, 221, 255, 0) 97.37%)",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4">
          <img src={rule_3} className="h-[135px] w-[144px] mt-2" alt="rule_3" />
          <div className="flex flex-col items-start w-[300px] mt-4">
            <p className="text-[18px] font-[700] leading-[20px] text-[white]">
              3. The Race To $1 Million
            </p>
            <ol className="flex flex-col gap-1 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[16px] text-[#FFF] font-[500]">
                The fight is decided when the first team reaches $1 million.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                Only the winner will remain and proceed to launch.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                The launch date will be announced directly after the first coin
                reaches $1M.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                Until the launch date, only the winner coin can be purchased.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rule4 = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-2">
      <div
        className="relative flex flex-col items-center w-full p-[2px] rounded-[10px] mt-4"
        style={{
          background:
            "linear-gradient(136.94deg, rgba(0, 77, 244, 0) 15.37%, rgba(239, 171, 0, 0.49) 35.41%, #4EB52A 47.25%, rgba(239, 171, 0, 0.53) 57.66%, rgba(38, 221, 255, 0) 97.37%)",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4">
          <img src={rule_4} className="h-[135px] w-[144px] mt-2" alt="rule_4" />
          <div className="flex flex-col items-start w-[300px] mt-4 ">
            <p className="text-[18px] font-[700] leading-[20px] text-[white]">
              4. The Winner Takes It All
            </p>
            <ol className="flex flex-col gap-4 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[16px] text-[#FFF] font-[500]">
                The losing team’s funds aren’t wasted. They’re added to the
                liquidity pool of the winning team, making the winner’s token
                stronger and more valuable.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                The winning token's launch date will be announced directly after
                the pre-sale goal is reached. The launch is expected to happen a
                few days later to secure a major CEX listing.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rule5 = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-2">
      <div
        className="relative flex flex-col items-center w-full p-[2px] rounded-[10px] mt-4"
        style={{
          background:
            "linear-gradient(136.94deg, rgba(0, 77, 244, 0) 15.37%, rgba(239, 171, 0, 0.49) 35.41%, #4EB52A 47.25%, rgba(239, 171, 0, 0.53) 57.66%, rgba(38, 221, 255, 0) 97.37%)",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4">
          <img src={rule_5} className="h-[131px] w-[144px] mt-2" alt="rule_5" />
          <div className="flex flex-col items-start w-[300px] mt-4">
            <p className="text-[18px] font-[700] leading-[20px] text-[white]">
              5. Rewards For Picking The Winner
            </p>
            <ol className="flex flex-col gap-1 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[16px] text-[#FFF] font-[500]">
                All participants receive the winning coin.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                But only the winner team will receive exclusive Prize Money
                (airdropped to their wallet), find more info below.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                Winners can claim their coins 24 hours earlier.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rule6 = () => {
  return (
    <div className="relative flex flex-col items-center px-4 mt-2">
      <img
        src={side_frog}
        className="absolute h-[286px] w-[100px] right-[0px] top-[-26px] z-20"
        alt="side_frog"
      />

      <div
        className="relative flex flex-col items-center w-full p-[2px] rounded-[10px] mt-4"
        style={{
          background:
            "linear-gradient(136.94deg, rgba(0, 77, 244, 0) 15.37%, rgba(239, 171, 0, 0.49) 35.41%, #4EB52A 47.25%, rgba(239, 171, 0, 0.53) 57.66%, rgba(38, 221, 255, 0) 97.37%)",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4">
          <img src={rule_6} className="h-[135px] w-[144px] mt-2" alt="rule_6" />
          <div className="flex flex-col items-start w-[300px] mt-4 ">
            <p className="text-[18px] font-[700] leading-[20px] text-[white]">
              6. Transparency And Fairness
            </p>
            <ol className="w-[310px] flex flex-col gap-1 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[16px] text-[#FFF] font-[500]">
                <b>Public Contracts:</b> Both pre-sale contracts are fully
                visible to ensure complete transparency.
              </li>
              <li className="text-[16px] text-[#FFF] font-[500]">
                <b>Fair Play:</b> Each wallet is limited to $25,000 to give
                everyone a chance to participate equally
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rule7 = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-2">
      <div
        className="relative flex flex-col items-center w-full p-[2px] rounded-[10px] mt-4"
        style={{
          background:
            "linear-gradient(136.94deg, rgba(0, 77, 244, 0) 15.37%, rgba(239, 171, 0, 0.49) 35.41%, #4EB52A 47.25%, rgba(239, 171, 0, 0.53) 57.66%, rgba(38, 221, 255, 0) 97.37%)",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4">
          <img src={rule_7} className="h-[135px] w-[144px] mt-2" alt="rule_7" />
          <div className="flex flex-col items-start w-[300px] mt-4 ">
            <p className="text-[18px] font-[700] leading-[20px] text-[white]">
              7. Join The Community
            </p>
            <p className="mt-2 ml-4 text-[16px] font-[500] leading-[16px] text-[white]">
              Connect with other participants in our
              <br /> Telegram channels:
            </p>
            <ol className="flex flex-col gap-1 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
              <li className="text-[16px] text-[#FFF] font-[500]">
                <b>General Channel:</b> For updates and discussions. <br />
                <b>Team Pepe Channel:</b> For Pepe supporters.
                <br />
                <b>Team Doge Channel:</b> For Doge believers.
              </li>
            </ol>
          </div>
          <div className="py-8">
            <button className="bg-[#00B7FF] px-8 flex justify-center space-x-2 items-center w-[100%] rounded-[5px] h-[48px] uppercase text-[20px] text-[#fff] font-[600]">
              Join Telegram <img src={telegram_icon} className="ml-4" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TheRules() {
  return (
    <div id="rules" className="bgRulesmob border-t border-transparent flex flex-col items-center px-4 pt-4">
      <p className="text-[22px] leading-[31px] text-[white] mt-4 mb-4 font-HiJack">
        THE 7 RULES
      </p>
      <RuleCard img={rule1} title="1. PICK YOUR CHAMPION" body="" />
      <Rule1 />
      <Rule2 />
      <Rule3 />
      <Rule4 />
      <Rule5 />
      <Rule6 />
      <Rule7 />
    </div>
  );
}

function RuleCard({img, title, body}) {
  return (
    <div
      className="relative flex flex-col items-center w-full rounded-[10px]"
    >
      <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full px-4 py-1">
        <img src={img} className="h-[135px] w-full mt-2 object-contain" alt="rule_1" />
        <div className="flex flex-col items-start justify-center w-[300px] mt-4">
          <p className="text-[22px] leading-[20px] text-[white] font-HiJack">
            {title}
          </p>
          <ol className="flex flex-col gap-4 pl-6 mt-4 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[#FFF]">
              <span className="text-[16px] text-[#FFF] font-[700]">
                Team Pepe ($PEGE) –
              </span>{" "}
              <br />{" "}
              <p className="text-[16px] text-[#FFF] font-[400]">
                Join Pepe, the internet’s ultimate rebel. This if for the people
                who value humor, resilience, and chaos.
              </p>
            </li>
            <li className="text-[#FFF]">
              <span className="text-[16px] text-[#FFF] font-[700]">
                Team Doge ($DOPE) –
              </span>{" "}
              <br />{" "}
              <p className="text-[16px] text-[#FFF] font-[400]">
                Stand with Doge, the first Meme who started it all. This is for
                the people who understand and respect the Doge legacy.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TheRules;
