import bgImage from "../../assets/mobile_assets/mob_two_led_first.png";

export default function MobileFightRules({ backgroundUrl }) {
  const rules = [
    {
      title: "1. CHOOSE YOUR CHAMPION",
      desc: "Pick your favorite meme by buying the coin you support.",
    },
    {
      title: "2. BUY TO SUPPORT YOUR TEAM",
      desc: " ",
    },
    {
      title: "3. THE RACE TO $1 MILLION",
      desc: " ",
    },
    {
      title: "4. THE WINNER TAKES ALL",
      desc: " ",
    },
    {
      title: "5. PRIZE MONEY",
      desc: " ",
    },
    {
      title: "6. TRANSPARENCY & FAIR PLAY",
      desc: " ",
    },
  ];

  return (
    <section
      className="relative w-full "
      aria-label="Fight rules"
     
    >
         <div className="flex justify-center items-end pb-12 min-h-[500px]"
          style={{
        backgroundImage: `url(${backgroundUrl || bgImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "100% 100%",
      }}
         >
          <p className="text-center text-[32px] text-[#fff] font-[400] font-[Anton] leading-[125%] uppercase">
            GLORY OR DEFEAT. <br/>Pick your Legend.
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
                  <p className="text-[24px] font-[400] leading-[133.333%] tracking-wide text-[#fff] uppercase font-anton">
                    {rule.title}
                  </p>
                  {rule.desc && (
                    <p className="mt-2 text-base leading-[150%] font-helvetica font-[700] text-[16px] text-neutral-300">
                      {rule.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
