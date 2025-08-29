import bgImage from "../../assets/fightRule/Fight-rules.webp";

export default function FightRules({ backgroundUrl }) {
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
      className="relative w-full max-h-[949px] flex flex-col justify-center items-center"
      aria-label="Fight rules"
      style={{
        backgroundImage: `url(${backgroundUrl || bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 100%",
      }}
    >
      <div className="flex w-full gap-10 max-w-[1280px] mx-auto px-8 flex-row">
        {/* Left side - Empty space for visual balance */}
         <div className="w-[50%] flex justify-center items-end pb-10">
          <p className="text-center section_heading">
            GLORY OR DEFEAT. <br/>Pick your Legend.
          </p>
        </div>

        {/* Right side - Rules content */}
        <div className="w-[50%]">
          <div className="border-2 border-white/25 px-8 py-8 m-4 rounded-lg bg-black/90 flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <h2 className="text-center section_heading">
              THE FIGHT RULES
            </h2>

            <div className="flex flex-col gap-4">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-white/20 last:border-b-0"
                >
                  <p className="text-[32px] font-[400] leading-[40px] tracking-wide text-[#fff] uppercase font-anton">
                    {rule.title}
                  </p>
                  {rule.desc && (
                    <p className="mt-2 text-base leading-relaxed font-helvetica font-[700] text-[22px] text-neutral-300">
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
